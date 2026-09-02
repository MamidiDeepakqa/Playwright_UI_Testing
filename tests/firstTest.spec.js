import { test, expect } from '@playwright/test'

test('Verify logged Into Safe Area', async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill('#username', 'admin');
    await page.fill('#password', 'admin');
    await page.click('button[type="submit"]');
    await expect(page.locator('.flash')).toContainText('You logged into a secure area!');
});


test("Verify login with Invalid credentials", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/login");
    await page.fill('#username', 'wrong');
    await page.fill('#password', 'wrong');
    await page.click('button[type="submit"]');
    await expect (page.locator('.flash')).toContainText("Your username is invalid!");
});