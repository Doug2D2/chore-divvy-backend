const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.post('/login', (req, res) => {
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;

    db.user.findAll({
        where: {
            username: usernameInput,
            password: passwordInput
        }
    })
    .then(data => {
        if(data.length === 0) {
           res.status(401);
           return res.json({errMessage: 'User Not Found'});
        }
        res.status(200);
        return res.json(data[0]);
    })
    .catch(err => { 
        res.sendStatus(500) 
        logger.error(err);
    });
});

router.post('/sign-up', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    db.user.create({
        username: username,
        password: password,
        first_name: firstName,
        last_name: lastName
    })
    .then(data => {
        res.status(200);
        res.json(data);
    })
    .catch(err => {
        res.status(500);
        logger.error(err);
    });
});

module.exports = router;