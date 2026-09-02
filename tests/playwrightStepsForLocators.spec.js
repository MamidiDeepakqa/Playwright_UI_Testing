//Navigation..............
// open a URL
await page.goto('https://example.com');

// go back
await page.goBack();

// go forward
await page.goForward();

// reload page
await page.reload();

// wait for page to fully load
await page.waitForLoadState('networkidle');


// Clicking...
// click a button
await page.click('button');

// click by ID
await page.click('#submit-btn');

// click by text
await page.click('text=Login');

// click by role
await page.getByRole('button', { name: 'Login' }).click();

// click a link
await page.getByRole('link', { name: 'Get started' }).click();

// double click
await page.dblclick('#element');

// right click
await page.click('#element', { button: 'right' });


// Typing / Filling input fields........
// fill an input field (clears first, then types)
await page.fill('#username', 'admin');

// fill by placeholder
await page.getByPlaceholder('Enter email').fill('test@test.com');

// fill by label
await page.getByLabel('Username').fill('admin');

// type slowly (like a real user, character by character)
await page.type('#username', 'admin');

// clear a field
await page.fill('#username', '');

// press a key
await page.press('#username', 'Enter');
await page.press('#username', 'Tab');


//Checkboxes and Radio buttons........
// check a checkbox
await page.check('#agree-checkbox');

// uncheck a checkbox
await page.uncheck('#agree-checkbox');

// click a radio button
await page.click('#radio-option-1');

// check by label
await page.getByLabel('I agree to terms').check();

// verify checkbox is checked
await expect(page.locator('#checkbox')).toBeChecked();


//Dropdowns / Select..........
// select by value
await page.selectOption('#country', 'india');

// select by visible text
await page.selectOption('#country', { label: 'India' });

// select by index (0 = first option)
await page.selectOption('#country', { index: 2 });

// select multiple options
await page.selectOption('#fruits', ['apple', 'banana']);


//File Upload.........
// upload a file
await page.setInputFiles('#file-upload', 'path/to/file.pdf');

// upload multiple files
await page.setInputFiles('#file-upload', ['file1.pdf', 'file2.pdf']);



//Hover and Focus............
// hover over an element
await page.hover('#menu-item');

// focus on an element
await page.focus('#username');



//Waiting.......
// wait for element to appear
await page.waitForSelector('#success-message');

// wait for specific URL
await page.waitForURL('https://example.com/dashboard');

// wait for text to appear
await page.waitForSelector('text=Welcome');

// wait for fixed time (avoid this — use sparingly)
await page.waitForTimeout(2000);  // 2 seconds



//Getting text and values............
// get text of an element
let message = await page.locator('.flash-message').textContent();
console.log(message);

// get value of an input field
let value = await page.locator('#username').inputValue();

// get page title
let title = await page.title();

// get current URL
let url = page.url();


//Assertions (expect) — checking results.......
// check element is visible
await expect(page.locator('.message')).toBeVisible();

// check element is hidden
await expect(page.locator('.error')).toBeHidden();

// check element contains text
await expect(page.locator('.flash')).toContainText('Welcome');

// check exact text
await expect(page.locator('h1')).toHaveText('Dashboard');

// check page title
await expect(page).toHaveTitle('My App');

// check current URL
await expect(page).toHaveURL('https://example.com/dashboard');

// check checkbox is checked
await expect(page.locator('#checkbox')).toBeChecked();

// check element is enabled
await expect(page.locator('#submit')).toBeEnabled();

// check element is disabled
await expect(page.locator('#submit')).toBeDisabled();

// check input has value
await expect(page.locator('#username')).toHaveValue('admin');



//Screenshots (useful for debugging)...........
// take full page screenshot
await page.screenshot({ path: 'screenshot.png', fullPage: true });

// screenshot of specific element
await page.locator('.header').screenshot({ path: 'header.png' });



//Alerts and Popups............
// handle alert popup
page.on('dialog', dialog => dialog.accept());

// dismiss alert
page.on('dialog', dialog => dialog.dismiss());

// get alert message
page.on('dialog', dialog => {
    console.log(dialog.message());
    dialog.accept();
});


//Keyboard shortcuts..........
// press keyboard shortcut
await page.keyboard.press('Control+A');  // select all
await page.keyboard.press('Control+C');  // copy
await page.keyboard.press('Escape');     // escape
await page.keyboard.press('Enter');      // enter



//Frames (iframes)........
// switch to iframe
const frame = page.frameLocator('#iframe-id');
await frame.locator('#button-inside-iframe').click();


// /The selectors cheat sheet
// by ID          → #elementId
// by class       → .className
// by tag         → button, input, h1
// by attribute   → [type="submit"]
// by text        → text=Login
// by placeholder → getByPlaceholder('Enter email')
// by label       → getByLabel('Username')
// by role        → getByRole('button', { name: 'Login' })
// by test ID     → getByTestId('submit-btn')