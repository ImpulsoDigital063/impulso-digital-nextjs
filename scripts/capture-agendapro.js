/**
 * Captura o AgendaPRO completo:
 *   - Admin (dono): dashboard, clientes, financeiro, configurações
 *   - Cliente público: LP, agendamento, meus pontos
 *   - Profissional comissionado: agenda, financeiro, horários, conta
 *
 * Uso:
 *   node scripts/capture-agendapro.js
 *
 * Salva em /public/cases/agendapro-*.png
 *
 * Nota: cria um agendamento real (Cliente Demo) no Testa Smoke pra capturar
 * a tela de sucesso. Limpar depois pelo admin.
 */

const path = require("path");
const fs = require("fs");

const PLAYWRIGHT_PATH = "C:/Users/DELL/radar-pro/node_modules/playwright";
const { chromium } = require(PLAYWRIGHT_PATH);

const BASE = "https://www.agendapro.net.br";
const SLUG = "teste-smoke-1";
const ADMIN = { email: "testesmoke@gmail.com", senha: "Edu123456" };
const PRO = { email: "contratado@gmail.com", senha: "Edu123456" };

const ONLY = process.argv.find((a) => a.startsWith("--only="))?.split("=")[1];
const sections = ONLY ? [ONLY] : ["admin", "cliente", "pro"];

const OUT_DIR = path.join(__dirname, "..", "public", "cases");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function shot(page, label) {
  const file = path.join(OUT_DIR, `agendapro-${label}.png`);
  await page.screenshot({ path: file, fullPage: false });
  console.log("  ✓", path.basename(file));
}

async function fillFirst(page, selectors, value) {
  for (const sel of selectors) {
    try {
      const loc = page.locator(sel).first();
      await loc.waitFor({ state: "visible", timeout: 3000 });
      await loc.fill(value);
      return sel;
    } catch (e) {
      /* next */
    }
  }
  return null;
}

async function clickFirst(page, selectors, timeout = 5000) {
  for (const sel of selectors) {
    try {
      const loc = page.locator(sel).first();
      await loc.waitFor({ state: "visible", timeout });
      await loc.scrollIntoViewIfNeeded();
      await page.waitForTimeout(300);
      await loc.click();
      return sel;
    } catch (e) {
      /* next */
    }
  }
  return null;
}

async function login(page, email, senha, isProfissional = false) {
  const loginUrl = isProfissional ? `${BASE}/profissional/login` : `${BASE}/admin/login`;
  await page.goto(loginUrl, { waitUntil: "networkidle", timeout: 45_000 });
  await page.waitForTimeout(1200);

  await fillFirst(page, ['input[type="email"]', 'input[name="email"]', 'input[placeholder*="mail" i]'], email);
  await fillFirst(page, ['input[type="password"]', 'input[name="senha"]', 'input[name="password"]'], senha);

  await clickFirst(page, [
    'button[type="submit"]',
    'button:has-text("Entrar")',
    'button:has-text("Acessar")',
    'button:has-text("Login")',
  ]);

  await page.waitForLoadState("networkidle", { timeout: 30_000 }).catch(() => {});
  await page.waitForTimeout(1800);
}

async function captureAdmin(page, label) {
  console.log(`\n━━━ ADMIN ${label} ━━━`);
  await login(page, ADMIN.email, ADMIN.senha, false);

  // /admin (dashboard/agenda)
  await page.goto(`${BASE}/admin`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `admin-agenda-${label}`);

  // scroll pra pegar mais partes da tela
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(500);
  await shot(page, `admin-agenda-${label}-2`);

  // /admin/clientes
  await page.goto(`${BASE}/admin/clientes`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `admin-clientes-${label}`);

  // /admin/financeiro
  await page.goto(`${BASE}/admin/financeiro`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  await shot(page, `admin-financeiro-${label}`);
  await page.evaluate(() => window.scrollBy(0, 500));
  await page.waitForTimeout(400);
  await shot(page, `admin-financeiro-${label}-2`);

  // /admin/configuracoes (profissionais, serviços, pontos)
  await page.goto(`${BASE}/admin/configuracoes`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `admin-config-${label}`);
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(400);
  await shot(page, `admin-config-${label}-2`);
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(400);
  await shot(page, `admin-config-${label}-3`);
}

async function captureCliente(page, label) {
  console.log(`\n━━━ CLIENTE ${label} ━━━`);

  // LP pública
  await page.goto(`${BASE}/${SLUG}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1800);
  await shot(page, `cliente-lp-${label}`);
  await page.evaluate(() => window.scrollBy(0, 600));
  await page.waitForTimeout(500);
  await shot(page, `cliente-lp-${label}-2`);

  // Fluxo de agendamento — 5 passos com Continuar entre cada
  await page.goto(`${BASE}/${SLUG}/agendar`, { waitUntil: "networkidle" });
  await page.waitForTimeout(2000);
  await shot(page, `cliente-agendar-1-servico-${label}`);

  // Passo 1: seleciona serviço + Continuar
  await clickFirst(page, [
    'div:has-text("Barba"):has-text("R$")',
    'button:has-text("R$ 30")',
    '[role="checkbox"]',
    'input[type="checkbox"]',
  ]);
  await page.waitForTimeout(700);
  await shot(page, `cliente-agendar-1-servico-${label}-selecionado`);
  await clickFirst(page, [
    'button:has-text("Continuar")',
    'a:has-text("Continuar")',
    'button:has-text("Próximo")',
  ]);
  await page.waitForTimeout(1500);

  // Passo 2: profissional
  await shot(page, `cliente-agendar-2-profissional-${label}`);
  await clickFirst(page, [
    'button:has-text("Comissionado")',
    'div:has-text("Comissionado")[role="button"]',
    'button:has-text("Contratado")',
    'label:has-text("Comissionado")',
    '[role="radio"]',
  ]);
  await page.waitForTimeout(700);
  await shot(page, `cliente-agendar-2-profissional-${label}-selecionado`);
  await clickFirst(page, [
    'button:has-text("Continuar")',
    'a:has-text("Continuar")',
    'button:has-text("Próximo")',
  ]);
  await page.waitForTimeout(1500);

  // Passo 3: data (handleSelectDate auto-avança pra step 'time', sem Continuar)
  await shot(page, `cliente-agendar-3-data-${label}`);
  await clickFirst(page, [
    '.grid.grid-cols-4 > button:not([disabled])',
    'div[class*="grid-cols-4"] button:not([disabled])',
    'button:has(span:text-matches("^\\d{1,2}$")):not([disabled])',
  ]);
  await page.waitForTimeout(1800);

  // Passo 4: horário
  await shot(page, `cliente-agendar-4-horario-${label}`);
  await clickFirst(page, [
    'button:has-text(":00"):not([disabled])',
    'button:has-text(":30"):not([disabled])',
    'button[class*="time"]:not([disabled])',
    'button[class*="horario"]:not([disabled])',
  ]);
  await page.waitForTimeout(900);
  await shot(page, `cliente-agendar-4-horario-${label}-selecionado`);
  await clickFirst(page, [
    'button:has-text("Continuar")',
    'a:has-text("Continuar")',
    'button:has-text("Próximo")',
  ]);
  await page.waitForTimeout(1500);

  // Passo 5: dados do cliente (preenche mas NÃO submete)
  await shot(page, `cliente-agendar-5-dados-${label}`);
  await fillFirst(page, ['input[name*="nome" i]', 'input[placeholder*="nome" i]'], "Cliente Demo");
  await fillFirst(page, ['input[name*="tel" i]', 'input[name*="phone" i]', 'input[placeholder*="celular" i]', 'input[placeholder*="whatsapp" i]', 'input[type="tel"]'], "99999999999");
  await page.waitForTimeout(800);
  await shot(page, `cliente-agendar-5-dados-${label}-preenchido`);

  // Meus pontos (se rota existir)
  await page.goto(`${BASE}/${SLUG}/meus-pontos`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `cliente-pontos-${label}`);
}

async function captureProfissional(page, label) {
  console.log(`\n━━━ PROFISSIONAL ${label} ━━━`);
  await login(page, PRO.email, PRO.senha, true);

  await page.goto(`${BASE}/profissional`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `pro-agenda-${label}`);
  await page.evaluate(() => window.scrollBy(0, 400));
  await page.waitForTimeout(400);
  await shot(page, `pro-agenda-${label}-2`);

  await page.goto(`${BASE}/profissional/financeiro`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `pro-financeiro-${label}`);

  await page.goto(`${BASE}/profissional/horarios`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `pro-horarios-${label}`);

  await page.goto(`${BASE}/profissional/conta`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);
  await shot(page, `pro-conta-${label}`);
}

async function runViewport(label, width, height) {
  const browser = await chromium.launch({ headless: true });

  for (const section of sections) {
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

    try {
      if (section === "admin") await captureAdmin(page, label);
      if (section === "cliente") await captureCliente(page, label);
      if (section === "pro") await captureProfissional(page, label);
    } catch (err) {
      console.error(`  ❌ ${section} ${label}:`, err.message);
    }

    await ctx.close();
  }

  await browser.close();
}

(async () => {
  console.log(`\n▶ AgendaPRO capture → ${OUT_DIR}`);
  await runViewport("desktop", 1440, 900);
  await runViewport("mobile", 390, 844);
  console.log("\n✅ Pronto.");
})();
