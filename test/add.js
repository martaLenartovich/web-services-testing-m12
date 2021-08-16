const chai = require("chai");
const expect = chai.expect;
const sendRequest = require("../lib/sendRequest");
const getUsers = require("../data/getUsers");
const env = require("../endpoint/test");

describe('Get Users', () => {

    getUsers.map((data) => {
        let response;

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying Status Code ', () => {
            expect(response.statusCode).to.equal(200);
        });

        it('Verifying that header exists and equal to application/json; charset=utf-8', () => {
            expect(response.headers).to.exist;
            expect(response.headers['content-type']).contains('application/json; charset=utf-8');
        });

        it('Verifying that the content of the response body is the array of 10 users', () => {
            expect(response.body.length).to.equal(10);
        });
    })

});