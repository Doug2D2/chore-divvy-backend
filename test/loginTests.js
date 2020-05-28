const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const logger = require('../logger');
let testUserId;

describe('Login Tests', () => {

    describe('/sign-up', (req, res) => {
        it('should create user', (done) => {
            let testUser = {
                username: 'tester@email.com',
                password: 'testPassword',
                firstName: 'testFirstName',
                lastName: 'testLastName'
            };

            server
                .post('/sign-up')
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    testUserId = res.body.id;
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.username).to.equal('tester@email.com');
                    done();
                });
        });
    });

    describe('/login', (req, res) => {
        it('should sign user into account', (done) => {
            let testUser = {
                username: 'tester@email.com',
                password: 'testPassword'
            };

            server
                .post('/login')
                .send(testUser)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.username).to.equal('tester@email.com');
                    done();
                });
        });
    });

    describe('/forgot-password', (req, res) => {
        it('should update user password in user table', (done) => {
            let updateTestUserPassword = {
                username: 'tester@email.com'
            };

            server
                .put('/forgot-password')
                .send(updateTestUserPassword)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(1);
                    expect(res.body[0]).to.equal(1);
                    done();
                });
        });
    });

    after((done) => {
        db.user.destroy({
            where: {
                id: testUserId
            }
        })
        .then(() => done())
        .catch(err => logger.error(err))
    });
});
