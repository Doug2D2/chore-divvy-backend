const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/login', (req, res) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            res.send(err);
        } if(!user) {
            res.send('User not found');
        } if(user) {
            res.send(user);
        }
    });
});

router.post('/sign-up', (req, res) => {
    res.send('/sign-up working');
});

module.exports = router;