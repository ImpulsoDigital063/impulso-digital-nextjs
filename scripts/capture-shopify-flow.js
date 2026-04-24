/**
 * Captura o fluxo de compra de uma loja Shopify:
 * Home → PDP → Adicionar ao carrinho → Carrinho → CEP/frete → Pagamento.
 *
 * Uso:
 *   node scripts/capture-shopify-flow.js <url-base> <prefix> [cep]
 *
 * Ex:
 *   node scripts/capture-shopify-flow.js https://gbnutrition.online gbnutrition-novo 77000000
 *
 * IMPORTANTE: para antes de finalizar o pedido. Nenhum pagamento é criado.
 */

const path = require("path");
const fs = require("fs");

const PLAYWRIGHT_PATH = "C:/Users/DELL/radar-pro/node_modules/playwright";
const { chromium } = require(PLAYWRIGHT_PATH);

const [, , baseUrl, prefix, cepArg] = process.argv;
if (!baseUrl || !prefix) {
  console.error("Uso: node scripts/capture-shopify-flow.js <url-base> <prefix> [cep]");
  process.exit(1);
}

const CEP = (cepArg || "77000000").replace(/\D/g, "");
const OUT_DIR = path.join(__dirname, "..", "public", "cases");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function shot(page, label) {
  const file = path.join(OUT_DIR, `${prefix}-flow-${label}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log("  ✓", path.basename(file));
}

async function tryClick(page, selectors, { description, timeout = 5000 } = {}) {
  for (const sel of selectors) {
    try {
      const locator = page.locator(sel).first();
      await locator.waitFor({ state: "visible", timeout });
      await locator.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
      await locator.click({ timeout });
      console.log(`  → clicou: ${description || sel}`);
      return true;
    } catch (e) {
      /* próximo seletor */
    }
  }
  console.log(`  ✗ não encontrou: ${description}`);
  return false;
}

async function run(label, width, height) {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
    locale: "pt-BR",
    userAgent:
      label === "mobile"
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  console.log(`\n━━━ ${label} ${width}x${height} ━━━`);

  try {
    // 1) Home
    console.log("[1] Home");
    await page.goto(baseUrl, { waitUntil: "networkidle", timeout: 60_000 });
    await page.waitForTimeout(1500);
    // fecha popup de cookies se existir
    await tryClick(page, [
      'button:has-text("Entendi")',
      'button:has-text("Aceitar")',
      'button:has-text("OK")',
      '[class*="cookie"] button',
    ], { description: "fechar cookies", timeout: 2000 });
    await page.waitForTimeout(500);
    await shot(page, `${label}-home`);

    // 2) Clicar no primeiro produto
    console.log("[2] Entrar num produto");
    const clickedProduct = await tryClick(page, [
      'a[href*="/products/"]:has(img)',
      'a[href*="/produtos/"]:has(img)',
      'a[href*="/products/"]',
      '.product-card a',
      '[class*="product"] a',
    ], { description: "primeiro produto", timeout: 8000 });

    if (clickedProduct) {
      await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
      await page.waitForTimeout(1500);
      await shot(page, `${label}-pdp`);

      // 3) Adicionar ao carrinho
      console.log("[3] Adicionar ao carrinho");
      await tryClick(page, [
        'button:has-text("Adicionar ao carrinho")',
        'button:has-text("Comprar")',
        'button[name="add"]',
        'form[action*="/cart/add"] button[type="submit"]',
        'button[type="submit"]:has-text("ADICIONAR")',
      ], { description: "botão adicionar", timeout: 8000 });
      await page.waitForTimeout(2500);
      await shot(page, `${label}-apos-add`);
    }

    // 4) Ir pra /cart
    console.log("[4] Carrinho");
    await page.goto(new URL("/cart", baseUrl).toString(), { waitUntil: "networkidle", timeout: 30_000 }).catch(() => {});
    await page.waitForTimeout(1500);
    await shot(page, `${label}-carrinho`);

    // 5) Calcular frete — procura input de CEP
    console.log("[5] Frete (CEP)");
    const cepSelectors = [
      'input[name*="zip" i]',
      'input[name*="cep" i]',
      'input[placeholder*="CEP" i]',
      'input[id*="zip" i]',
      'input[id*="cep" i]',
    ];
    let cepFilled = false;
    for (const sel of cepSelectors) {
      try {
        const loc = page.locator(sel).first();
        await loc.waitFor({ state: "visible", timeout: 3000 });
        await loc.fill(CEP);
        console.log(`  → CEP preenchido via ${sel}`);
        cepFilled = true;
        break;
      } catch (e) {
        /* próximo */
      }
    }
    if (cepFilled) {
      await tryClick(page, [
        'button:has-text("Calcular")',
        'button:has-text("Estimar")',
        'button:has-text("OK")',
        'button[name*="zip" i]',
      ], { description: "calcular frete", timeout: 3000 });
      await page.waitForTimeout(3500);
      await shot(page, `${label}-frete`);
    }

    // 6) Tenta ir pro checkout
    console.log("[6] Checkout");
    await tryClick(page, [
      'button:has-text("Finalizar compra")',
      'button:has-text("Finalizar")',
      'button:has-text("Ir para o checkout")',
      'a:has-text("Finalizar compra")',
      'input[name="checkout"]',
      'button[name="checkout"]',
    ], { description: "ir pro checkout", timeout: 5000 });
    await page.waitForLoadState("networkidle", { timeout: 20_000 }).catch(() => {});
    await page.waitForTimeout(3000);
    await shot(page, `${label}-checkout`);

    // tenta preencher CEP no checkout e capturar opções de frete + pagamento
    for (const sel of cepSelectors) {
      try {
        const loc = page.locator(sel).first();
        await loc.waitFor({ state: "visible", timeout: 3000 });
        await loc.fill(CEP);
        console.log(`  → CEP preenchido no checkout via ${sel}`);
        break;
      } catch (e) {
        /* próximo */
      }
    }
    await page.waitForTimeout(4000);
    await shot(page, `${label}-checkout-frete`);

    // scroll pra baixo pra tentar pegar métodos de pagamento
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);
    await shot(page, `${label}-checkout-pagamento`);
  } catch (err) {
    console.error(`  ❌ ${label}:`, err.message);
  }

  await ctx.close();
  await browser.close();
}

(async () => {
  console.log(`\n▶ Fluxo Shopify: ${baseUrl} (CEP ${CEP})`);
  await run("desktop", 1440, 900);
  await run("mobile", 390, 844);
  console.log("\n✅ Pronto.");
})();
