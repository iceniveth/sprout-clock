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

  await page.getByRole("button", { name: "Clock In" }).click();

  await page
    .getByRole("dialog")
    .getByRole("button", { name: "Clock In" })
    .click();

  // wait for 2 seconds to ensure the dialog is fully rendered
  await page.waitForTimeout(2_000);

  const timestamp = Temporal.Now.plainDateTimeISO()
    .toString({ fractionalSecondDigits: 0 }) // drop subseconds
    .replace(/:/g, "-");
  const screenshotPath = `screenshots/clock-in-${timestamp}.png`;
  await page.screenshot({ path: screenshotPath });
})();
