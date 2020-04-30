const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

describe('Account Tests', () => {

    beforeEach((done) => {
        db.user.destroy({
            where : {},
            truncate: true
        })
        .then(data => {
            //console.log(data);
            done();
        })
        .catch(err => {
            console.log(err);
            done();
        });
    });

    describe('/GET users', () => {
        it('should GET all users from user table', () => {
            chai.request('http://localhost:8080')
                .get('/get-users')
                .end((err, res) => {
                    //should.exist(res);
                    console.log(res);
                    res.should.have.status(200);
                    res.should.be.a('array');
                    res.length.should.be.eql(0);
                done();
            });
        });
    });

    // describe('', function() {

    // });

    // describe('', function() {

    // });
});
