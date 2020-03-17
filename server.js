const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const app = express();

app.use(session({ secret: 'cats' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());


app.get('/', function(req, res) {
    res.send('Hello World');
});

app.listen(3000, function() {
    console.log('server running on port 3000');
});

