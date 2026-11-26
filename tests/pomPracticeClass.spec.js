// import { test, expect } from '@playwright/test';
// import { TodoPage } from '../pages/TodoPage.js';

// test.describe('Sanity Test: Todo Application', async () =>{

// let sanity;

// test.beforeEach('From Before Each Class',async ({page})=>{
//      sanity = new TodoPage(page);
//      await sanity.goto();
// });

// test('Addition of ToDo value', async () => {
//     await sanity.additionOfToDo('Karan');
// });

// test('Deletion of Todo', async () => {
//     await sanity.deletionOfToDo('Umesh');
// });

// test('Complete Todo', async ({ page }) => {
//     await sanity.completeTodo('rakesh');
//     await expect(page.locator('li').filter({ hasText: "rakesh" })).toBeVisible();
//     await expect(page.locator('li').filter({ hasText: "rakesh" })).toHaveText("rakesh");
// });

// test('Test Filtering the Todos', async () => {
//     await sanity.additionOfToDo('Karan');
//     await sanity.filterBy('Active');
// });

// test('Regression Test : Validate the todo app functionality', async () => {
//     await sanity.additionOfToDo('Karan');
//     await sanity.deletionOfToDo('Umesh');
//     await sanity.completeTodo('rakesh');
//     await sanity.filterBy('Active');
// });
// });