const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-frequencies', (req, res) => {
    db.frequency.findAll()
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('GET /get-frequencies', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error'});
    });
});

module.exports = router;
