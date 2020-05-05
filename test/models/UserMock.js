const SequelizeMock = require('sequelize-mock');
const dbMock = new SequelizeMock();

const UserMock = dbMock.define('user', {
    id: 1,
    username: 'testUser1@email.com',
    password: 'password',
    first_name: 'tester1',
    last_name: 'lastName1'
});

module.exports = UserMock;


