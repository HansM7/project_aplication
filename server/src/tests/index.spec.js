import app from "../../app.js"
import request from 'supertest'

describe("GET /USERS",()=>{
    test('return status 200', async() => { 
        const response = await request(app).get('/users').send()
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Array)
    })
})

describe("GET /USER",()=>{

    const idExperimental=1

    test('return status 400', async() => { 
        const response = await request(app).get(`/user/${idExperimental}`).send()
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe("POST /USER",()=>{

    const dataExperimental={
        name: 'test',
        email: 'test@test.com',
        level: 15
    }

    test('return status 200', async() => { 
        const response = await request(app).post(`/create-user/`).send(dataExperimental)
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe("PUT /USER",()=>{
    const idExperimental=1

    const dataExperimental={
        name: 'test',
        email: 'test@test.com',
        level: 15
    }

    test('return status 400', async() => { 
        const response = await request(app).put(`/edit-user/${idExperimental}`).send(dataExperimental)
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
    })
})

describe("DELETE /USER",()=>{
    const idExperimental=1

    test('return status 400', async() => { 
        const response = await request(app).delete(`/delete-user/${idExperimental}`).send()
        expect(response.statusCode).toBe(400)
        expect(response.body).toBeInstanceOf(Object)
    })
})


