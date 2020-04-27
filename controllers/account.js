const express = require('express');
const router = express.Router();

router.put('/update-account/:id', (req, res) => {
    res.send('/update-account working');
    const id = req.params.id;
    const {
        username,
        password,
        firstName,
        lastName
    } = req.body;

    db.user.update({
        username: username,
        password: password,
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
});

module.exports = router;