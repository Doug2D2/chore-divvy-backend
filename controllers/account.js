const express = require('express');
const router = express.Router();
// let db = require('../models');
const logger = require('../logger');
const bcrypt = require('bcrypt');
const mock = require('../test/models/UserMock');

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'test') {
    console.log('letter A');
    var db = {
        user: require('../test/models/UserMock')
    };
} else {
    var db = require('../models');
}

router.get('/get-users', (req, res) => {
   db.user.findAll()
    // mock.findAll()
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