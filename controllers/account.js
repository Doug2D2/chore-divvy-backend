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
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.get('/get-user-by-id/:id', (req, res) => {
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
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.put('/update-account/:id', (req, res) => {
    const id = req.params.id;
    const {
        password,
        firstName,
        lastName
    } = req.body;


    if(password.length >= 8) {
        bcrypt.hash(password, 10, function(err, hash) {
            if(err) {
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error' });
            }

            db.user.update({
                password: hash,
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
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error' });
            });
        })
    } else {
        res.status(400);
        return res.json({ errMessage: 'Password must be at least 8 characters' });
    }
});

module.exports = router;