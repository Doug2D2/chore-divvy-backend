const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    res.send('/login working');
});

router.post('/sign-up', (req, res) => {
    res.send('/sign-up working');
});

module.exports = router;