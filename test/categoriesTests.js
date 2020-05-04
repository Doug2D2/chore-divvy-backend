const supertest = require('supertest');
const server = supertest.agent('http://localhost:8080');
const chai = require('chai');
var expect = chai.expect;