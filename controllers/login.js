const express = require('express');
const router = express.Router();
const db = require('../models');

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
       res.sendStatus(200);
    })
    .catch(err => {
        res.sendStatus(400);
    });
});

router.post('/sign-up', (req, res) => {
    res.send('/sign-up working');
});

module.exports = router;