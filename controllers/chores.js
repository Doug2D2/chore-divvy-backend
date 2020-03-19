const express = require('express');
const router = express.Router();

router.get('/get-chores', (req, res) => {
    res.send('/get-chores working');
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