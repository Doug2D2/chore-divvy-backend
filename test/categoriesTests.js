const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const logger = require('../logger');

describe('Category Tests', () => {

    beforeEach((done) => {
        db.category.create({
            id: -1,
            category_name: 'testCategory'
        })
        .then(() => done())
        .catch(err => logger.error(err));

        // db.user.create({
        //     id: -1,
        //     username: 'tester@email.com',
        //     password: 'testPassword',
        //     first_name: 'testFirstName',
        //     last_name: 'testLastName'
        // })
        // .then(() => done())
        // .catch(err => logger.error(err));
    });

    afterEach((done) => {
        db.category.destroy({
            where: {
                id: -1
            }
        })
        .then(() => done())
        .catch(err => logger.error(err));
    });

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
                .get('/get-category/-1')
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

    // describe('/add-category', (req, res) => {
    //     it('should add category to category table', (done) => {
    //         server
                
    //     });
    // });
});