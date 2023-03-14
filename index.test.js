const request = require("supertest")
const baseURL = "http://localhost:3000/api/"

describe("GET /getall", ()=>{
    beforeAll(async ()=>{
        await request(baseURL).get("/getAll")
    })
    it("should return get all", async()=>{
        const response = await request(baseURL).get("/getAll");
        expect(response.statusCode).toBe(200);
    })
})

describe("POST /post", ()=>{
    const logSpy = jest.spyOn(global.console, 'log');

    const user = {
        "name" :"test",
        "age" : 33
    }
    
    it("should add user to database", async() => {
        const response = await request(baseURL).post("/post").send(user);

        expect(response.statusCode).toBe(200);
        expect(response.body._id).not.toBe(null);

    })
})