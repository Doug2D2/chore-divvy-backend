const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
const expect = chai.expect;
const proxyquire = require('proxyquire');
const UserMock = require('./models/UserMock');
const account = proxyquire('../controllers/account', { 'db' : { 'user': UserMock }});

describe('Account Tests', () => {

    // beforeEach(() => {

    // });

    describe('/get-users', () => {
        it('should get all users', (done) => {
            server
                .get('/get-users')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.be.gt(0);
                    expect(res.body[0]).to.be.a('object');
                    console.log(res.body[0]);
                    done();
                });
        });
    });

    describe('/get-user/:id', () => {
        it('should get one user by id', (done) => {
            server
                .get('/get-user/7')
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

    // describe('', function() {

    // });
});
