const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-chores-by-userId/:userId', (req, res) => {
    const userId = req.params.userId;

    db.chore.findAll({
        where: {
            assignee_id: userId
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

router.get('/get-chores-by-categoryId/:categoryId', (req, res) => {
    const categoryId = req.params.categoryId;

    db.chore.findAll({
        where: {
            category_id: categoryId
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

router.get('/get-chore-by-id/:id', (req, res) => {
    const choreId = req.params.id;

    db.chore.findAll({
        where: {
            id: choreId
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

router.post('/add-chore', (req, res) => {
    const { 
        choreName, 
        status, 
        dateComplete,
        frequencyId,
        categoryId, 
        assigneeId, 
        difficulty, 
        notes } = req.body;
    
    db.chore.create({
        chore_name: choreName,
        status: status,
        date_complete: dateComplete,
        frequency_id: frequencyId,
        category_id: categoryId,
        assignee_id: assigneeId,
        difficulty: difficulty,
        notes: notes
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    })
});

router.put('/update-chore/:id', (req, res) => {
    const id = req.params.id;
    let {
        choreName, 
        status, 
        frequencyId,
        categoryId, 
        assigneeId, 
        difficulty, 
        notes } = req.body;

    // If assigneeId is -1 then the chore is unassigned and 
    // should be set to null 
    if (assigneeId == -1) {
        assigneeId = null
    }
    
    db.chore.update({
            chore_name: choreName,
            status: status,
            frequency_id: frequencyId,
            category_id: categoryId,
            assignee_id: assigneeId,
            difficulty: difficulty,
            notes: notes
    }, {
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200);
        //data is number of items returned.
        return res.json(data);
    })
    .catch(err => {
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.delete('/delete-chore/:id', (req, res) => {
    const id = req.params.id;

    db.chore.destroy({
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
