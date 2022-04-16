import supertest from "supertest";
import app from "./server";

const request = supertest(app)

it('gets the test endpoint', async () => {
    const response = await request.get('/test')
    expect(response.status).toBe(200)
    expect(response.body.message).toBe('pass!')
})

it('gets the palindrome endpoint', async () => {
    const response = await request.get('/palindrome?input=asdffdsa')
    expect(response.status).toBe(200)
    expect(response.body.result).toBe('true')
})
