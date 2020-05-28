const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;
const db = require('../models');
const logger = require('../logger');

describe('Login Tests', () => {

    before((done) => {
        db.user.create({
            id: -1,
            username: 'tester@email.com',
            password: 'testPassword',
            first_name: 'testFirstName',
            last_name: 'testLastName'
        })
        .then(() => done())
        .catch(err => logger.error(err))
    });

    after((done) => {
        db.user.destroy({
            where: {
                id: -1
            }
        })
        .then(() => done())
        .catch(err => logger.error(err))
    });

    
});