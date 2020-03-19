const express = require('express');
const router = express.Router();

router.put('/update-account', (req, res) => {
    res.send('/update-account working');
});

module.exports = router;