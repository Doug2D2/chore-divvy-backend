const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const logger = require('../logger');
let deleteChoreId;

describe('Chore Tests', () => {

    before((done) => {
        db.category.create({
            id: -2,
            category_name: 'testCategory'
        })
        .then(() => {
            db.chore.create({
                id: -1,
                chore_name: 'testChore',
                status: 'In Progress',
                category_id: -2
            })
            .then(() => done())
            .catch(done, err => logger.error(err));
        })
        .catch(done, err => logger.error(err));
    });

    after((done) => {
        db.chore.destroy({
            where: {
                id: -1
            }
        })
        .then(() => {
            db.category.destroy({
                where: {
                    id: -2
                }
            })
            .then(() =>  done())
            .catch(done, err => logger.error(err));
        })
        .catch(done, err => logger.error(err));
    });

    describe('/get-chores', () => {
        it('should get all chores', (done) => {
            server
                .get('/get-chores')
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

    describe('/get-chore/:id', () => {
        it('should get one chore by id', (done) => {
            server
                .get('/get-chore/-1')
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

    describe('/add-chore', (req, res) => {
        it('should add a chore to the chore table', (done) => {
            let newChore = {
                choreName: 'newTestChore',
                status: 'In Progress',
                categoryId: -2
            };

            server
                .post('/add-chore')
                .send(newChore)
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200)
                .end((err, res) => {
                    deleteChoreId = res.body.id;
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.a('object');
                    expect(res.body.chore_name).to.equal('newTestChore');
                    done();
            });
        });

        describe('/delete-chore/:id', (req, res) => {
            it('should delete a chore from the chore table', (done) => {
                server
                    .delete('/delete-chore/' + deleteChoreId)
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



});
