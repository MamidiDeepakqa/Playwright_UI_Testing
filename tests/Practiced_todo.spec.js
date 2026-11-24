import { test, expect } from '@playwright/test';

//https://demo.playwright.dev/todomvc

test('Add a todo item', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    let pageUrl = page.url();
    console.log("Landing Page title: ", pageUrl);
    await page.getByPlaceholder('What needs to be done?').fill("Buy groceries");
    await page.locator('.new-todo').press('Enter');
    await expect(page.locator('.new-todo')).toContainText('Buy groceries');
});

test('Complete a todo item', async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
    await page.getByPlaceholder('What needs to be done?').fill('Complete my Playwright course');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.locator('li').filter({ hasText: 'Complete my Playwright course' }).locator('.toggle').click();
    await expect(page.getByText('Completed')).toContainTect('complete');
});

//1.Playwright navigations...
await page.goto("www.google.com");
await page.goBack();
await page.goForward();
await page.reload();
await page.waitForLoadstate();

//2.clicking...
await page.click();
await page.getByRole('button', { name: 'Started' }).click();
await page.getByRole('button', { name: 'Sign in' }).click();
await page.getByPlaceholder('').click();
await page.getByLabel('').click();
await page.dblClick();
await page.click('#element', { button: 'right' });

//3.Filling / Typing...
await page.fill('element', 'admin');
await page.type('element', 'userStory');
await page.fill('element', '');
await page.press('element', 'Enter');
await page.press('element', 'Tab');
await page.getByPlaceholder('element').fill('admin');

//4.checkboxes and radio buttons...
await page.check('element');
await page.uncheck('element');
await page.click('element');
await page.gyByPlaceholder('element').check();
await expect(page.locator('element')).toBeChecked();

//5.Dropdown...
await page.selectOption('element', 'value');
await page.selectOption('element', { index: 2 });
await page.selectOption('element', { label: 'Ind' });
await page.selectOption('element', ['apple', 'orange']);

//6.FileUpload...
await page.selectInputFile('element', 'c://file.pdf');
await page.selectInputFile('element', ['d://file.png', 'd://file.jpg']);

//7.hover and focus...
await page.hover('element');
await page.focus('element');

//8.await...
await page.waitForSelect('element');
await page.waitForTimeout(2000);
await page.waitForURL('www.google.com');
await page.selector('text=value');

//9.Getting text and value...
let elementtext = await page.locator('element').textContent();
console.log(elementtext);

let fieldvalue = await page.locator('element').inputValue();
console.log(fieldValue);

let title = await page.title();

let url = await page.url();

//10.Assertions...
await expect(page.locator('element')).toBeChecked();
await expect(page.locator('element')).toBeVisible();
await expect(page.locator('element')).toBeDisabled()
await expect(page.locator('element')).toBeEnabled();
await expect(page.locator('element')).toContaintext();
await expect(page.locator('element')).toHaveText();
await expect(page.locator('element')).toHaveTitle();
await expect(page.locator('element')).toHaveURL();
await expect(page.locator('element')).toHavevalue();

//11.Screenshots...
await page.screenshot({ path: 'screenshot.png', fullPage: true });
await page.locator('element').screenshot({ path: 'screenshot.pdf' });

//12.Alerts & pop ups
await page.on('dialog', dialog => dialog.accept());
await page.on('dialog', dialog => dialog.dismiss());
await page.on('dialog', dialog => {
    console.log(dialog.message()),
        dialog.accept();
})

//13.keyboard shortcuts...
await page.keyboard.press('Control+A');
await page.keyboard.press('Control+C');
await page.keyboard.press('Escape');
await page.keyboard.press('Enter');

//14.Frames...
const frame = page.frameLocator('element');
await fame.locator('element').click();
