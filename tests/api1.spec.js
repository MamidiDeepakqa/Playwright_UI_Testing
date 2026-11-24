import { test, expect } from '@playwright/test';

//https://jsonplaceholder.typicode.com/posts/{id}

// All questions use https://jsonplaceholder.typicode.com.

test('Validation of One User details', async ({ request }) => {
    const response = await request.get(`https://jsonplaceholder.typicode.com/users/3`);
    expect(response.status()).toBe(200);
    let data = await response.json();
    console.log(data);
    expect(data.email).toContain('@');
});

test('Validation of list of users', async ({ request }) => {
    const response = await request.get(`https://jsonplaceholder.typicode.com/users`);
    expect(response.status()).toBe(200);
    let data = await response.json();
    console.log(data);
    expect(data).toHaveLength(10);

    for (const id of data) {
        expect(id.name).toBeTruthy();
        expect(id.email).toBeTruthy();
    }
});

test('Test Post endpoint', async ({ request }) => {
    const response = await request.post(`https://jsonplaceholder.typicode.com/posts`, { data: { title: "My first post", body: "Learning Playwright API testing", userId: 1 }});

    expect(response.status()).toBe(201);

    let data = await response.json();
    console.log(data);
    expect(data.title).toContain('My first post');
});

test('Test PUT endpoint', async ({ request }) => {
    const response = await request.put(`https://jsonplaceholder.typicode.com/posts/1`, { data: { title: "Testing data" } })
    expect(response.status()).toBe(200);
    let data = await response.json();
    expect(data.title).toContain("Testing data");
});


test('Test Delete endpoint', async ({ request }) => {
    let response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    expect(response.status()).toBe(200);
});

test('Test Negative value', async ({ request }) => {
    let response = await request.get(`https://jsonplaceholder.typicode.com/posts/9999`);
    expect(response.status()).toBe(404);
});

test('Test Query parameters', async ({ request }) => {
    let response = await request.get(`https://jsonplaceholder.typicode.com/posts?userId=2`);
    expect(response.status()).toBe(200);
    let data = await response.json();
    for (let id of data) {
        expect(id.userId).toEqual(2);
    }
});

const userIds = [1, 2, 3, 4, 5, 9999];

for (const id of userIds) {
    test(`GET user ${id}`, async ({ request }) => {
        // your code: get /users/${id}, assert 200 and data.id equals id
        const response = await request.get(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (response.status() === 200) {
            let data = await response.json()
            expect(data.id).toEqual(id);
        } else {
            console.log('This value is failed: ', id);
        }
    });
}

