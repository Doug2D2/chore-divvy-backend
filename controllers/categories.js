const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-categories', (req, res) => {
    db.category.findAll()
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

router.get('/get-categories/:id', (req, res) => {
    const id = req.params.id;
    
});

router.post('/add-category', (req, res) => {
    
});

router.put('/update-category/:id', (req, res) => {
    const id = req.params.id;
    
});

router.delete('/delete-category/:id', (req, res) => {
    const id = req.params.id;
    
});

module.exports = router;