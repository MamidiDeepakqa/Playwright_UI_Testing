// import { test, expect } from '@playwright/test';

// test('Complete a todo', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await page.getByPlaceholder('What needs to be done?').fill('Complete Playwright course');
//     await page.locator('.new-todo').press('Enter');
//     await page.locator('li').filter({ hasText: 'Complete Playwright course' }).locator('.toggle').click();
//     await expect(page.locator('li').filter({ hasText: 'Complete Playwright course' }).locator('.toggle')).toBeChecked();
// });

// test('Complete a todo and verify', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await page.locator('.new-todo').fill('Buy groceries');
//     await page.locator('.new-todo').press('Enter');
//     await page.locator('li').filter({ hasText: 'Buy groceries' }).locator('.toggle').click();
//     await expect(page.locator('li').filter({ hasText: 'Buy groceries' }).locator('.toggle')).toBeChecked();
// });

// test('Delete a todo and verify', async ({ page }) => {
//     const input1 = page.locator('.new-todo');
//     const input = page.locator('li').filter({ hasText: 'Delete this task' });
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await input1.fill('Delete this task');
//     await input1.press('Enter');
//     await input.hover();
//     await input.locator('.destroy').click();
//     await expect(input).not.toBeVisible();
// });

// test('Filter completed todos', async ({ page }) => {
//     const inputPath = page.locator('.new-todo');
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     await inputPath.fill('Learn Playwright');
//     await inputPath.press('Enter');
//     await inputPath.fill('Learn JavaScript');
//     await inputPath.press('Enter');
//     const inputPath1 = page.locator('li');
//     await inputPath1.filter({ hasText: 'Learn Playwright' }).locator('.toggle').click();
//     await inputPath1.getByRole('link', { name: 'Completed' }).click();
//     await expect(inputPath1.filter({ hasText: 'Learn Playwright' })).toBeVisible();
//     await expect(inputPath1.filter({ hasText: 'Learn JavaScript' })).not.toBeVisible();
// });

// test('Edit a todo item', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     const inputPath = page.locator('.new-todo');
//     await inputPath.fill('Old task name');
//     await inputPath.press('Enter');
//     await page.locator('li').filter({ hasText: 'Old task name' }).locator('label').dblclick();
//     await page.locator('li').filter({ hasText: 'Old task name' }).locator('.edit').clear();
//     await page.locator('li').filter({ hasText: 'Old task name' }).locator('.edit').fill('New task name');
//     await page.locator('li').filter({ hasText: 'Old task name' }).locator('.edit').press('Enter');
//     await expect(page.locator('li').filter({ hasText: 'New task name' })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: 'Old task nameNew task name' })).not.toBeVisible();
// });

// test('Full todo workflow', async ({ page }) => {
//     await page.goto(`https://demo.playwright.dev/todomvc`);
//     const inputPath2 = page.locator('.new-todo');
//     await inputPath2.fill('Task A');
//     await inputPath2.press('Enter');
//     await inputPath2.fill('Task B');
//     await inputPath2.press('Enter');
//     await inputPath2.fill('Task C');
//     await inputPath2.press('Enter');
//     await page.locator('li').filter({ hasText: 'Task A' }).locator('.toggle').click();
//     await page.locator('li').filter({ hasText: 'Task B' }).hover();
//     await page.locator('li').filter({ hasText: 'Task B' }).locator('.destroy').click();
//     await expect(page.locator('.todo-count')).toHaveText('1 item left');
//     await page.locator('li').getByRole('link', { name: 'Completed' }).click();
//     await expect(page.locator('li').filter({hasText: 'Task A'})).toBeVisible();
//     await expect(page.locator('li').filter({hasText: 'Task B'})).not.toBeVisible();
//     await expect(page.locator('li').filter({hasText: 'Task C'})).not.toBeVisible();
// });