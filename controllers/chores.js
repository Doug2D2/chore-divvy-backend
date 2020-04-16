const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-chores', (req, res) => {
    res.send('/get-chores working');

    db.chore.findAll()
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    })

});

router.get('/get-chore-by-id', (req, res) => {
    res.send('/get-chore-by-id working');
});

router.post('/add-chore', (req, res) => {
    res.send('/add-chore working');
});

router.put('/update-chore', (req, res) => {
    res.send('/update-chore working');
});

router.delete('/delete-chore', (req, res) => {
    res.send('/delete-chore working');
});

module.exports = router;