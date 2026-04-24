const path = require("path");
const PLAYWRIGHT_PATH = "C:/Users/DELL/radar-pro/node_modules/playwright";
const { chromium } = require(PLAYWRIGHT_PATH);

const OUT = path.join(__dirname, "..", "public", "_audit");
require("fs").mkdirSync(OUT, { recursive: true });

const SECTIONS = [
  { id: "hero", sel: "section:has(> div h1), header + section, main > section:first-child" },
  { id: "como-funciona", sel: "#como-funciona" },
  { id: "portfolio", sel: "#portfolio" },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const [label, w, h] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
    const ctx = await browser.newContext({
      viewport: { width: w, height: h },
      deviceScaleFactor: 1,
      reducedMotion: "reduce",
    });
    const page = await ctx.newPage();
    await page.goto("http://localhost:3004", { waitUntil: "networkidle", timeout: 45_000 });
    await page.waitForTimeout(1200);

    // Rola a página inteira pra disparar lazy-load + sf-in
    const docH = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < docH; y += Math.floor(h * 0.6)) {
      await page.evaluate((yy) => window.scrollTo(0, yy), y);
      await page.waitForTimeout(200);
    }
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);

    // Full page screenshot pra visão geral
    await page.screenshot({
      path: path.join(OUT, `full-${label}.png`),
      fullPage: true,
    });
    console.log(`  ✓ full-${label}.png`);

    await ctx.close();
  }
  await browser.close();
})();
