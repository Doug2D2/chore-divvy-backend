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
        if(data.length === 0) {
           res.status(401);
           return res.json({errMessage: 'User Not Found'});
        }
        res.status(200);
        return res.json(data[0]);
    })
    .catch(err => { res.sendStatus(500) });
});

router.post('/sign-up', (req, res) => {
    res.send('/sign-up working');
});

module.exports = router;