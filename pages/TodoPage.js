export class TodoPage {

    constructor(page) {
        this.page = page;
        // SELECTORS — stored once, used everywhere
        this.inputField = page.locator('.new-todo');
        this.li = page.locator('li');
    }

    // METHOD 1: navigate to the app
    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    // METHOD 2: add a single todo
    async addTodo(text) {
        await this.inputField.fill(text);
        await this.inputField.press('Enter');
    }

    // METHOD 3: complete a specific todo — fill this in yourself
    async completeTodo(text) {
        // hint: use this.page.locator('li').filter...
        await this.li.filter({ hasText: text }).locator('.toggle').click();
    }

    // METHOD 4: delete a specific todo — fill this in yourself
    async deleteTodo(text) {
        // hint: hover first, then destroy
        await this.li.filter({ hasText: text }).hover();
        await this.li.filter({ hasText: text }).locator('.destroy').click();
    }

    // METHOD 5: filter by status
    async filterBy(status) {
        await this.page.getByRole('link', { name: status }).click();
    }

    // async waitForTimeOut(){
    //     await this.page.waitForTimeOut(3000);
    // }
}