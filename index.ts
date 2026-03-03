import { chromium } from "playwright";

console.log("Scraping with Playwright...");

// simple scraping example
(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.google.com");
  console.log("page title:", await page.title());

  await browser.close();
  console.log("browser closed");
})();
