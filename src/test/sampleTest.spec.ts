import {expect} from "chai";
import * as supertest from "supertest";
import {attachJson, feature} from "../report/allureReportWrapper";

describe('Sample http call', () => {

    it('passed', async () => {
        feature("Feature that gonna pass");

        const response = await supertest('https://jsonplaceholder.typicode.com').get('/todos/1');
        attachJson("Get TODO 1 response", JSON.stringify(response, null, '\t'));
        expect(response.status).to.be.equal(200);
    });

    it('failed', async () => {
        feature("Feature that gonna fail");

        const response = await supertest('https://jsonplaceholder.typicode.com').get('/todos/2');
        attachJson("Get TODO 2 response", response.text);
        expect(response.status).to.be.equal(404);
    });

});