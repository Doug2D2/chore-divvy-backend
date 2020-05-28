const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const logger = require('../logger');
let deleteCategoryId;

describe('Category Tests', () => {

    before((done) => {
        db.user.create({
            id: -1,
            username: 'tester@email.com',
            password: 'testPassword',
            first_name: 'testFirstName',
            last_name: 'testLastName'
        })
        .then(() => {
            db.category.create({
                id: -1,
                category_name: 'testCategory'
            })
            .then(() => done())
            .catch(err => logger.error(err));
        })
        .catch(err => logger.error(err));
    });

    after((done) => {
        db.category.destroy({
            where: {
                id: -1
            }
        })
        .then(() => {
            db.user.destroy({
                where: {
                    id: -1
                }
            })
            .then(() => done())
            .catch(err => logger.error(err));
        })
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

    describe('/update-category/:id', (req, res) => {
        it('should update a category by the id', (done) => {
            let updatedCategory = {
                categoryName: 'UpdatedTestCategory',
                userIds: [-1]
            };

            server
                .put('/update-category/-1')
                .send(updatedCategory)
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

    describe('/add-category', (req, res) => {
        it('should add category to category table', (done) => {
            let newCategory = {
                categoryName: 'newTestCategory'
            };

            server
                .post('/add-category')
                .send(newCategory)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    deleteCategoryId = res.body.id;
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.category_name).to.equal('newTestCategory');
                    done();
            });
        });
    });

    describe('/delete-category/:id', (req, res) => {
        it('should delete a category from the category table', (done) => {
            server
                .delete('/delete-category/' + deleteCategoryId)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.status).to.equal(200);
                    expect(res.body).to.equal(1);
                    done();
            });
        });
    });
});
