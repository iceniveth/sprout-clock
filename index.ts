import { chromium } from "playwright";
import { Temporal } from "@js-temporal/polyfill";

process.loadEnvFile();

console.log("Scraping with Playwright...");

// simple scraping example
(async () => {
  const browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"], // or --start-fullscreen / --kiosk
  });

  const context = await browser.newContext({ viewport: null });
  const page = await context.newPage();

  await page.goto("https://xlr8.app.sprout.ph");

  await page.fill("[name='username']", process.env.APP_USERNAME || "");
  await page.fill("[name='password']", process.env.APP_PASSWORD || "");

  await page.click("[name='login']");

  // do a page click by getByRole('button', { name: 'Clock Out' })
  await page.getByRole("button", { name: "Clock Out" }).click();

  // wait for 2 seconds to ensure the dialog is fully rendered
  await page.waitForTimeout(2_000);

  // generate timestamped filename e.g. screenshot-2026-01-02T13-15-00.png
  const timestamp = Temporal.Now.plainDateTimeISO()
    .toString({ fractionalSecondDigits: 0 }) // drop subseconds
    .replace(/:/g, "-");
  const screenshotPath = `screenshots/screenshot-${timestamp}.png`;
  await page.screenshot({ path: screenshotPath });

  // optionally click the button once it's visible
  // await page.getByRole("dialog").getByRole("button", { name: "Clock Out" }).click();

  // await browser.close();
  // console.log("browser closed");
})();
