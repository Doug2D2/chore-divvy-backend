const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-frequencies', (req, res) => {
    db.frequency.findAll()
    .then(data => {
        console.log('is this thing working?');
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        console.log('this thing isnt working.');
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error'});
    });
});

module.exports = router;
