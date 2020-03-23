const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('./models');
const app = express();
require('dotenv').config();

const categoryRoutes = require('./controllers/categories');
const choreRoutes = require('./controllers/chores');
// const loginRoutes = require('./controllers/login');
const accountRoutes = require('./controllers/account');

app.use(session({ secret: process.env.SECRET , resave: false, saveUninitialized: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
app.use(categoryRoutes);
app.use(choreRoutes);
// app.use(loginRoutes);
app.use(accountRoutes);

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const User = require('./models/User');

passport.use(new LocalStrategy(
  function(username, password, done) {
    db.user.findAll({ where:{ username: username, password: password }})
    .then(function(user) {
        console.log('u1: ' + user);
    //   if (!user) {
    //       console.log('if !user');
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
      return done(null, user);
    })
    .catch(err => {
        console.log(err);
        return done(err); 
    })
  }
));

passport.serializeUser(function(user, done) {
    console.log('text first');
    console.log(user.id);
    console.log(done);
        
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    db.user.findAll({ where: { id: id }})
    .then((user) => {
        done(null, user);
    })
    .catch((err) => {
        done(err, null);
    })
})


app.get('/error', (req, res) => {
    res.send(req.body);
});

app.get('/', (req, res) => {
    res.send('SuccessFULL');
});

app.post('/login', 
passport.authenticate('local'), 
// passport.authenticate('local', { failureRedirect: '/error' }),
(req, res) => {
    console.log('inside login route');
});

db.sequelize
    .sync({ alter: true })
    .then(() => {
        app.listen(3000, function() {
            console.log('server running on port 3000');
        });
    })
    .catch(err => logger.error(err));