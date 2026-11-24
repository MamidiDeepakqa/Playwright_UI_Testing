import { test, expect } from '@playwright/test';
// import { request } from 'node:http';

//https://jsonplaceholder.typicode.com/users/1

test('Validate the API details', async ({ request }) => {

    let response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);

    let data = await response.json();

    console.log(data);

    expect(data.name).toBeTruthy();

    // expect(data.name).toEqual('Leanne Graham');
    expect(data.name).toBe('Leanne Graham');

    expect(data.company.name).toBe('Romaguera-Crona');


});