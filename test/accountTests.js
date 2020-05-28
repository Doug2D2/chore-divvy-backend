const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
const expect = chai.expect;
const db = require('../models');
const logger = require('../logger');

describe('Account Tests', () => {

    before((done) => {
        db.user.create({
            id: -1,
            username: 'tester@email.com',
            password: 'testPassword',
            first_name: 'testFirstName',
            last_name: 'testLastName'
        })
        .then(() => done())
        .catch(err => logger.error(err));
    });

    after((done) => {
        db.user.destroy({
            where: {
                id: -1
            }
        })
        .then(() => done())
        .catch(err => logger.error(err));
    });

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
                    done();
                });
        });
    });

    describe('/get-user/:id', () => {
        it('should get one user by id', (done) => {
            server
                .get('/get-user/-1')
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

    describe('/update-account/:id', () => {
        it('should update user account by id', (done) => {
            let updatedTestUser = {
                firstName: 'updatedTestFirstName',
                lastName: 'updatedTestLastName'
            };
            
            server 
                .put('/update-account/-1')
                .send(updatedTestUser)
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
});
