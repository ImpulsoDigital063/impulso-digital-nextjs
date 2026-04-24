/**
 * Captura screenshots de um site pra usar como print no Portfolio.
 *
 * Uso:
 *   node scripts/capture-case.js <url> <prefix>
 *
 * Ex:
 *   node scripts/capture-case.js https://evsuplementosinjetaveis.com evsuplementos
 *
 * Salva em /public/cases/:
 *   {prefix}-desktop-1.png .. {prefix}-desktop-5.png (1440x900, diferentes scrolls)
 *   {prefix}-mobile-1.png  .. {prefix}-mobile-5.png  (390x844, diferentes scrolls)
 *   {prefix}-full.png      (full page screenshot, pra referência)
 */

const path = require("path");
const fs = require("fs");

// Playwright vem do RadarPRO (projeto local com chromium instalado)
const PLAYWRIGHT_PATH = "C:/Users/DELL/radar-pro/node_modules/playwright";
const { chromium } = require(PLAYWRIGHT_PATH);

const [, , url, prefix] = process.argv;

if (!url || !prefix) {
  console.error("Uso: node scripts/capture-case.js <url> <prefix>");
  process.exit(1);
}

const OUT_DIR = path.join(__dirname, "..", "public", "cases");
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function captureAt(page, scrollY, filePath) {
  await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), scrollY);
  await page.waitForTimeout(900);
  await page.screenshot({ path: filePath, fullPage: false });
  console.log("  ✓", path.basename(filePath));
}

async function captureViewport(browser, { width, height, label, scrolls }) {
  const ctx = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
    userAgent:
      label === "mobile"
        ? "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
        : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  console.log(`\n[${label} ${width}x${height}]`);
  await page.goto(url, { waitUntil: "networkidle", timeout: 60_000 });
  await page.waitForTimeout(1500);

  // Rola até o final devagar pra disparar lazy-load, depois volta ao topo
  const docHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < docHeight; y += 400) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(600);

  // Captura em várias posições distribuídas
  const step = Math.max(1, Math.floor((docHeight - height) / (scrolls - 1)));
  for (let i = 0; i < scrolls; i++) {
    const y = i * step;
    const file = path.join(OUT_DIR, `${prefix}-${label}-${i + 1}.png`);
    await captureAt(page, y, file);
  }

  // Full page (só desktop)
  if (label === "desktop") {
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(400);
    const fullFile = path.join(OUT_DIR, `${prefix}-full.png`);
    await page.screenshot({ path: fullFile, fullPage: true });
    console.log("  ✓", path.basename(fullFile));
  }

  await ctx.close();
}

(async () => {
  console.log(`\n▶ Capturando ${url} → ${OUT_DIR}`);
  const browser = await chromium.launch({ headless: true });

  try {
    await captureViewport(browser, { width: 1440, height: 900, label: "desktop", scrolls: 5 });
    await captureViewport(browser, { width: 390, height: 844, label: "mobile", scrolls: 5 });
    console.log("\n✅ Pronto.");
  } catch (err) {
    console.error("\n❌ Erro:", err.message);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
})();
