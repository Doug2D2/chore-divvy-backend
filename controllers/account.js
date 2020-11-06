const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');
const bcrypt = require('bcrypt');

router.get('/get-users', (req, res) => {
    db.user.findAll()
     .then(data => {
         res.status(200);
         return res.json(data);
     })
     .catch(err => {
         logger.error('GET /get-users', err);
         res.status(500);
         return res.json({ errMessage: 'Server Error' });
     });
 });

router.get('/get-user/:id', (req, res) => {
    const id = req.params.id;

    db.user.findAll({
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('GET /get-user', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.put('/update-account/:id', async (req, res) => {
    const id = req.params.id;
    let passwordHash;
    const {
        password,
        firstName,
        lastName
    } = req.body;

    if(password) {
        if(password.length >= 8) {
            passwordHash = await bcrypt.hash(password, 10);
        } else {
            res.status(400);
            return res.json({ errMessage: 'Password must be at least 8 characters' });
        }
    } 
    db.user.update({
        password: passwordHash,
        first_name: firstName,
        last_name: lastName
    }, {
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('PUT /update-account', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

module.exports = router;