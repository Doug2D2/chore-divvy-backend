const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;

describe('Chore Tests', () => {

    // beforeEach((done) => {
    //     db.chore.create({
    //         id: -1,
    //         chore_name: '',
    //         status: '',
    //         frequency_id: frequencyId,
    //         category_id: categoryId,
    //         assignee_id: assigneeId,
    //         difficulty: difficulty,
    //         notes: notes
    //     })
    //     .then(() => done())
    //     .catch(err => logger.error(err));
    // });

    // afterEach((done) => {
    //     db.category.destroy({
    //         where: {
    //             id: -1
    //         }
    //     })
    //     .then(() => done())
    //     .catch(err => logger.error(err));
    // });

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
                .get('/get-chore/4')
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