import { test, expect } from '@playwright/test'

//https://jsonplaceholder.typicode.com

//------------------------------------------------------------
// Q16: beforeAll with a shared base URL
// Store the base URL in one const BASE = 'https://jsonplaceholder.typicode.com' and use it in three different tests, 
// so changing it once updates all of them. This is the same idea as Page Object Model, applied to API tests.
//------------------------------------------------------------

test.describe('Smoke Test', async () => {

    const BASE = 'https://jsonplaceholder.typicode.com';

    // // Q9: Nested fields
    // // GET /users/2. Assert status 200. Then assert the nested values exist: address.city, address.geo.lat and company.name should all be truthy.
    // test('Nested fields', async ({ request }) => {
    //     const response = await request.get(`${BASE}/users/2`);
    //     expect(response.status()).toBe(200);
    //     let data = await response.json();
    //     console.log(data);
    //     expect((data.address.city).toLowerCase()).toContain('wisokyburgh');
    //     expect(data.address.geo.lat).toContain('-43.9509');
    //     expect(data.company.name).toBeTruthy();
    // });

    // // Q10: Filter in code
    // // GET /users. Use .filter() to find users whose email ends with ".biz" (hint: email.endsWith(".biz")). Assert that at least one user matches.
    // test('Filter in code', async ({ request }) => {
    //     const response = await request.get(`${BASE}/users`);
    //     expect(response.status()).toBe(200);
    //     let data = await response.json();
    //     let emailWithBizEnding = data.filter((user) => {
    //         return user.email.endsWith(".biz");
    //     });
    //     console.log(emailWithBizEnding);
    //     expect(emailWithBizEnding.length).toBeGreaterThan(0);
    // });

    // // Q11: Map and compare
    // // GET /users. Use .map() to build an array of all username values. Assert the array contains "Bret" using toContain
    // test('Map and compare', async ({ request }) => {
    //     const response = await request.get(`${BASE}/users`);
    //     expect(response.status()).toBe(200);
    //     let data = await response.json();
    //     let userNames = data.map(user => {
    //         return user.username;
    //     });
    //     console.log("Usernames: ", userNames);
    //     expect(userNames).toContain('Bret');
    // });

    // // Q12: Related resources
    // // GET /posts/1/comments. Assert status 200, then loop through the comments and assert every comment has postId equal to 1 and an email containing "@".
    // test('Q12: Related resources', async ({ request }) => {
    //     const response = await request.get(`${BASE}/posts/1/comments`);
    //     expect(response.status()).toBe(200);
    //     const data = await response.json();
    //     for (const comment of data) {
    //         expect(comment.postId).toEqual(1);
    //         expect(comment.email).toContain('@');
    //     }
    // });

    // // Q13: Comparing two calls
    // // GET /users/1 and GET /posts?userId=1. Assert that every post's userId equals the user's id. This is a cross-check between two endpoints.
    // test('Comparing two calls', async ({ request }) => {
    //     const user1Response = await request.get(`${BASE}/users/1`);
    //     expect(user1Response.status()).toBe(200);
    //     const user1Data = await user1Response.json();
    //     console.log(user1Data);
    //     const user2Response = await request.get(`${BASE}/posts?userId=1`);
    //     expect(user2Response.status()).toBe(200);
    //     const user2Data = await user2Response.json();
    //     // console.log(user2Data);
    //     for (const userD of user2Data) {
    //         expect(userD.userId).toEqual(user1Data.id);
    //     }
    // });

    // // Set B: New skills
    // // Q14: Response headers
    // // GET /users/1. Assert that the header content-type contains "application/json".
    // //expect(response.headers()['content-type']).toContain('application/json');
    // test(`Response headers`, async ({ request }) => {
    //     const response = await request.get(`${BASE}/users/1`);
    //     expect(response.status()).toBe(200);
    //     console.log(response);
    //     expect(response.headers()['content-type']).toContain('application/json');
    // });

    // // Q15: Response time
    // // Measure how long a GET /posts takes using Date.now() before and after. Assert it finished in under 3000 ms.
    // // const start = Date.now();
    // // // request here
    // // const duration = Date.now() - start;
    // // expect(duration).toBeLessThan(3000);
    // test('Response time', async ({ request }) => {
    //     const start = Date.now();
    //     const response = await request.get(`${BASE}/posts`);
    //     expect(response.status()).toBe(200);
    //     const duration = Date.now() - start;
    //     console.log(`Actual API response time: ${duration}ms`);
    //     expect(duration).toBeLessThan(3000);
    // });

    //Q17: Negative scenarios (data-driven)
    // Create a loop over these invalid IDs: [0, 101, 9999, -1]. For each, test that GET /posts/${id} returns 404. 
    // Each ID should show up as its own test in the report.

    //     let invalidIDs = [0, 101, 999, -1];

    //     for (const id of invalidIDs) {
    //         test(`Test invalid Idss ${id}`, async ({ request }) => {
    //             const response = await request.get(`${BASE}/posts/${id}`);
    //             expect(response.status()).toBe(404);
    //         });
    //     }
    // });


    // Q18: Full CRUD flow in one test
    // Do POST, then PUT, then DELETE, in order, and assert the status code at each step:
    // POST /posts → 201
    // PUT /posts/1 → 200
    // DELETE /posts/1 → 200

    test('test the crud operations', async ({ request }) => {
        const response = await request.post(`${BASE}/posts`);
        expect(response.status()).toBe(201);
        const response1 = await request.put(`${BASE}/posts/1`);
        expect(response1.status()).toBe(200);
        const response2 = await request.delete(`${BASE}/posts`);
        expect(response2.status()).toBe(404);
    });
});