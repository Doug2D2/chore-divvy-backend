const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;

describe('Category Tests', () => {
    describe('/get-categories', () => {
        it('should get all categories', (done) => {
            server
                .get('/get-categories')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.be.gt(0);
                    expect(res.body[0]).to.be.a('object');
                    done();
                });
        });
    });

    describe('/get-category/:id', () => {
        it('should get one category by id', (done) => {
            server
                .get('/get-category/5')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    expect(res.body[0]).to.be.a('object');
                    done();
                });
        });
    });
});