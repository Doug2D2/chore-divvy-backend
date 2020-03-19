const Sequelize = require('sequelize');
const sequelize = new Sequelize('chore_divvy', 'postgres', 'password', {
    dialect: 'postgres',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;