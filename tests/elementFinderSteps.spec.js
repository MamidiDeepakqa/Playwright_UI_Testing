// import { expect, test } from '@playwright/test'

// //Navigation......
// test('Validate the Navigations', async ({ page }) => {
//     await page.goto("https://demoqa.com/");
//     await page.goBack();
//     await page.goForward();
//     await page.reload();
//     await page.waitForLoadState();
// });

// test("validate the clicks", async ({ page }) => {
//     await page.click('#element');
//     await page.click('.element');
//     await page.click('text=name');
//     await page.getByRole('button', { name: "Sign In" }).click();
//     await page.getByRole('link', { name: 'Get Started' }).click();
//     await page.dbclick('#element');
//     await page.click('#element', { button: 'right' });
// });

// test('Validate typing/filing the fields', async ({ page }) => {
//     await page.fill('#element', 'test Data');
//     await page.type('.element', 'data info');
//     await page.fill('#elemenet', '');
//     await page.getByPlaceholder('#element').fill('data');
//     await page.press('#element', 'data');
// });

// test('validate checkboxes and Radio buttons', async ({ page }) => {
//     await page.check('#element');
//     await page.uncheck('.element');
//     await page.click('.element');
//     await expect(page.locator('#element')).toBeChecked();
// });



// //Navigation......
// test('validate the navigation revision', async ({ page }) => {
//     await page.goto("https://demoqa.com/");
//     await page.goBack();
//     await page.goForward();
//     await page.reload();
//     await page.waitForLoadState();
// });

// test('vaidate the clicks revsion', async ({ page }) => {
//     await page.click('#element');
//     await page.getByPlaceholder('#element').click();
//     await page.getByRole('button', { name: 'Sign In' }).click();
//     await page.dbclick();
//     await page.click('#element', { button: 'right' });

//     await page.fill('#element', 'test');
//     await page.getByPlaceholder('.element').fill('data');
//     await page.type('#element', 'user data');
//     await page.fill('#element', '');
//     await page.press('#element', 'Enter');
//     await page.press('#element', 'Tab');

//     await page.check('#element');
//     await page.uncheck('.element');
//     await page.click('#element');
//     await page.getByPlaceholder('.element').check();
//     await expect(page.locator('#element')).toBeChecked();

//     //dropdown / select
//     await page.selectOption('#element', 'value')
//     await page.selectOption('#element', { label: "apple" });
//     await page.selctOption('.element', { index: 2 });
//     await page.selectOption('.element', ['apple', 'banana']);


//     //file Upload
//     await page.setInputFiles('#element', 'c://java/doc.png');
//     await pahe.setInputFiles('.element', ['file/doc.png', 'file1/doc.jpg']);

//     //hover & focus on the fields..
//     await page.hover('#element');
//     await page.focus('#element');

//     //waiting...
//     await page.waitForSelector('#element');
//     await page.waitForURL('www.google.com');
//     await page.waitForTimeout(200);
//     await page.waitForSelector('text=data');                                                                                                                                                                                                                                                                     

//     //Getting text and values
//     let inputValue = await page.locator('#element').inputValue();
//     console.log(inputValue);

//     let textContext = await page.locator('.element').textContext();
//     console.log(textContext);

//     let pageTitle = page.title();
//     console.log(pageTitle);

//     let currentPageUrl = page.url();
//     console.log(currentPageUrl);


//     //Screenshots...
//     // take full page screenshot
//     await page.screenshot({ path: 'failure.png', fullPage: true });

//     // screenshot of specific element
//     await page.location('.header').screenshot({ path: 'header.png' });


//     //Alerts and Popups.....
//     await page.on('dialog', dialog => dialog.accept());
//     await page.on('dialog', dialog => dialog.dismiss());

//     await page.on('dialog', dialog => {
//         console.log(dialog.message());
//         dialog.accept();
//     });


//     //keyBoard shortcuts.....
//     await page.keyboard.press('Control=A');
//     await page.keyboard.press('Control+C');
//     await page.keyboard.press('Control+V');
//     await page.keyboard.press('Enter');
//     await page.keyboard.press('Escape');


//     //iFrames
//     let frame = await page.frameLocator('#frame id');
//     await frame.locator('#inside frame id').click();

// });

// //REVISION......
// //Navigation......
// await page.goto('www.google.com');
// await page.goBack();
// await page.goForward();
// await page.reload();
// await page.waitForLoadState(); //Wait for Page to fully load...

// //Clicking
// await page.locator('#element').click();
// await page.click('#element');
// await page.getByRole('button', { name: 'Sign In' }).click();
// await page.getByRole('link', { name: 'Get Started' }).click();
// await page.dbclick();
// await page.click('#element', { button: 'right' });



// //Navigation...
// await page.goto("www.google.com");
// await page.goback();
// await page.goForward();
// await page.relaod();
// await page.waitForLoadState();


// //Clicking.......
// await page.click('#element');
// await page.click('.click');
// await page.getByRole('button', { name: 'Sign In' }).click();
// await page.getByRole('link', { name: 'Get Started' }).click();
// await page.dbclick();
// await page.click('#element', { button: 'right' });


// //Typing / Filling input fields
// await page.fill('#element');
// await page.getByPlaceholder('#element').fill('test');
// await page.type('#element', 'admin');
// await page.click('.element', '');
// await page.press('#element', 'Enter');
// await page.press('.element', 'Tab');


// //Checkboxes and Radio buttons
// await page.check('#element');
// await page.uncheck('.element');
// await page.click('#element');
// await page.getByLabel('.element').check();
// await expect(page.locator('#element')).toBeChecked();


// //Dropdown...
// await page.selectOption('#element', 'value');
// await page.selectOption('.element', { label: 'India' });
// await page.selectOption('#element', { index: 2 });
// await page.selectOption('#element', ['apple', 'cream']);


// //fileUpload...
// await page.selectInputFiles('#element', 'c/file/doc.png');
// await page.selectInputFiles('.element', ['c:/file/png', 'c:/file/jpg']);


// //hover & focus...
// await page.hover('.element');
// await page.focus('#element');


// //wait...
// await page.waitForSelector('#element');
// await page.waitForUrl('www.google.com');
// await page.waitForSelector('text=data');
// await page.waitForTimeout(2000);

// //Getting text and values...
// await page.locator('.element').textContext();
// await page.locator('#element').inputValue();
// await page.title();
// await page.url();

// //Assertions..
// // check element is visible
// await expect(page.locator('.element')).toBeVisible();

// // check element is hidden
// await expect(page.locator('.element')).toBeHidden();

// // check element contains text
// await expect(page.locator('#elemene')).toContainText('data');


// //keyboard Shortcuts...
// await page.keyboard.press('Control+A');
// await page.keyboard.press('Contorl+C');
// await page.keyboard.press('Escape');
// await page.keyboard.press('Escape');


// //frames...
// const frame = page.frameLocator('#element');
// await frame.locator('#element').click();

// //screenshot...
// await page.screenshot({ path: screen.png, fullPage: true });
// await page.locator('.element').screenshot({path: shot.png});


// //alerts...
// await page.on('dialog', dialog => dialog.accept());
// await page.on('dialog', dialog => dialog.dismiss());

// await page.on('dialog', dialog => {
//     console.log(dialog.message())
//     dialogle.accept();                                                                                                                                                                                                                                           
// });
