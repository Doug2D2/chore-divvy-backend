const express = require('express');
const router = express.Router();

router.get('/get-categories', (req, res) => {
    console.log('getting categories');
    res.send('/get-categories working');
});

router.get('/get-categories-by-id', (req, res) => {
    res.send('/get-categories-by-id working');
});

router.post('/add-category', (req, res) => {
    res.send('/add-category working');
});

router.put('/update-category', (req, res) => {
    res.send('/update-category working');
});

router.delete('/delete-category', (req, res) => {
    res.send('/delete-cateogry working');
});

module.exports = router;