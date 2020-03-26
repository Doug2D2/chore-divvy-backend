const express = require('express');
const router = express.Router();
const db = require('../models');

router.post('/login', (req, res) => {
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;

    console.log(db.user);
    db.user.findAll({
        where: {
            username: usernameInput,
            password: passwordInput
        }
    })
    .then(data => {
        res.json(data);
    })
    .catch(err => res.json(err));
    
    //res.send(`username: ${usernameInput} password: ${passwordInput}`);
});

router.post('/sign-up', (req, res) => {
    res.send('/sign-up working');
});

module.exports = router;