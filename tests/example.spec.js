// @ts-check
const { test, expect } = require("@playwright/test");

test("login guru", async ({ page }) => {
  await page.goto("https://demo.guru99.com/v4/");
  await page.locator("input[name=uid]").fill("mngr589389");
  await page.locator("input[name=password]").fill("EgahamE");
  await page.locator("input[name=btnLogin]").click();
  await expect(page.locator("td>.heading3")).toHaveText(
    "Welcome To Manager's Page of Guru99 Bank"
  );
});
