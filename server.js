const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
const db = require('./models');
const app = express();
require('dotenv').config();

const categoryRoutes = require('./controllers/categories');
const choreRoutes = require('./controllers/chores');
const loginRoutes = require('./controllers/login');
const accountRoutes = require('./controllers/account');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(categoryRoutes);
app.use(choreRoutes);
app.use(loginRoutes);
app.use(accountRoutes);

db.sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(8080, function() {
            console.log('server running on port 3000');
        });
    })
    .catch(err => logger.error(err));

