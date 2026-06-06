import { chromium } from "playwright";
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
  await page.goto("http://localhost:3000");
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    const loaded = document.body.innerText.includes("LOADING EXPERIENCE");
    console.log("Loading string present?", loaded);
  });
  await browser.close();
})();
