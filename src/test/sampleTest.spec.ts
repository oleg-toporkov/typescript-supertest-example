import {expect} from "chai";
import * as supertest from "supertest";

describe('Sample http call', () => {

    it('passed', async () => {
        const response = await supertest('https://jsonplaceholder.typicode.com').get('/todos/1');
        console.log(response.body)
        expect(response.status).to.be.equal(200);
    });

    it('failed', async () => {
        const response = await supertest('https://jsonplaceholder.typicode.com').get('/todos/2');
        console.log(response.body)
        expect(response.status).to.be.equal(404);
    });

});