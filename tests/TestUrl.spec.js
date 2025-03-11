const { test, expect } = require('@playwright/test');

/*
npx playwright test TestUrl.spec.js  --project=chromium
*/



test('Test mit CLI-URL', async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveURL("/");
});
