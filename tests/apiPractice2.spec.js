import { test, expect } from '@playwright/test'

//https://jsonplaceholder.typicode.com

// Q9: Nested fields
// GET /users/2. Assert status 200. Then assert the nested values exist: address.city, address.geo.lat and company.name should all be truthy.

test('Nested fields', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/2');
    expect(response.status()).toBe(200);
    let data = await response.json();
    console.log(data);
    expect((data.address.city).toLowerCase()).toContain('wisokyburgh');
    expect(data.address.geo.lat).toContain('-43.9509');
    expect(data.company.name).toBeTruthy();
});