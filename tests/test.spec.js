import { test, expect } from '@playwright/test';

//https://demo.playwright.dev/todomvc

// test('Add three todos and verify count', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);

//     const todoInput = page.getByPlaceholder('What needs to be done?');

//     await todoInput.fill('Learn Playwright');
//     await todoInput.press('Enter');
//     await todoInput.fill('Write test cases');
//     await todoInput.press('Enter');
//     await todoInput.fill('Push to GitHub');
//     await todoInput.press('Enter');
//     await expect(page.locator('.todo-count')).toContainText('3 items left');
// });


// // // get text of an element....
// // await page.locator('element').textContent();
// // // get input value....
// // await page.locator('element').inputvalue();

// // //assert text available on the element
// // await expect(page.locator('')).toContainText();
// // //assert exact text match....
// // await expect(page.locator('')).toHavetext();
// // await expect(page.locator('')).toHavevalue();

// test('Add todo and verify text', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await page.getByPlaceholder('What needs to be done?').fill('Learn API Testing');
//     await page.getByPlaceholder('What needs to be done?').press('Enter');
//     await expect(page.getByText('Learn API Testing')).toBeVisible();
// });

// test('Complete a todo', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await page.getByPlaceholder('What needs to be done?').fill('Complete Playwright course');
//     await page.locator('li').filter({ hasText: 'Complete Playwright course' }).locator('.toggle').click();
//     await page.locator('li').filter({ hasText: 'Complete Playwright course' }).locator('.toggle').toBeChecked();
// });
