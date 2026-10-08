// Visual check before a PR: screenshots at 1440 and 390, horizontal overflow and console errors.
// Needs Playwright once:  npm i -g playwright && npx playwright install chromium
// Run with the site served:  python3 -m http.server 8000  &  node scripts/check.mjs [url ...]
// Without arguments it checks the homepage and work.html.
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const base = "http://localhost:8000/";
const urls = process.argv.length > 2 ? process.argv.slice(2) : [base, base + "work.html"];
const out = "screenshots";
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
let failed = false;
for (const url of urls) {
  const slug = (new URL(url).pathname.split("/").pop() || "index.html").replace(/\.html$/, "");
  for (const [name, viewport] of [["desktop", { width: 1440, height: 900 }], ["mobile", { width: 390, height: 844 }]]) {
    const page = await browser.newPage({ viewport });
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => { if (m.type() === "error" && !/fonts\.g/.test(m.location().url || "")) errors.push(m.text()); });
    // "load", not "networkidle": video streams from python http.server (no Range support) never finish
    await page.goto(url, { waitUntil: "load" });
    await page.waitForTimeout(1200);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    const height = await page.evaluate(() => document.body.scrollHeight);
    for (let y = 0, i = 0; y < height; y += viewport.height, i++) {
      await page.evaluate((y) => scrollTo(0, y), y);
      await page.waitForTimeout(450);
      await page.screenshot({ path: `${out}/${slug}-${name}-${String(i).padStart(2, "0")}.png` });
    }
    console.log(`${slug} ${name}: overflow ${overflow}px, errors ${errors.length}`, errors);
    if (overflow > 0 || errors.length) failed = true;
    await page.close();
  }
}
await browser.close();
process.exit(failed ? 1 : 0);
