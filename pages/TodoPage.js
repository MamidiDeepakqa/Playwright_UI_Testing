import { test, expect } from '@playwright/test';

export class TodoPage {

    constructor(page) {
        this.page = page;
        this.input = page.locator('.new-todo');
        this.list = page.locator('li');
    }

    async goto() {
        await this.page.goto('https://demo.playwright.dev/todomvc');
    }

    async additionOfToDo(text) {
        await this.input.fill(text);
        await this.input.press('Enter');
    }

    async deletionOfToDo(text) {
        await this.input.fill(text);
        await this.input.press('Enter');
        await this.list.filter({ hasText: text }).locator('.toggle').click();
        await this.list.filter({ hasText: text }).hover();
        await this.list.filter({ hasText: text }).locator('.destroy').click();
    }

    async completeTodo(text) {
        await this.input.fill(text);
        await this.input.press('Enter');
    }

    async filterBy(status) {
        await this.page.locator('.filters').getByRole('link', { name: status }).click();
    }
}