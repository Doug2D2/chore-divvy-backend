const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');

router.get('/get-chores', (req, res) => {
    db.chore.findAll()
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

router.get('/get-chore-by-id', (req, res) => {
    const choreId = req.body.id;

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
        frequencyId,
        categoryId, 
        assigneeId, 
        difficulty, 
        notes, 
        createdAt, 
        updatedAt } = req.body;
    //Will this be calculated on backend and saved when 'complete' box checked?
    // const dateCompleteInput = req.body.date_complete;
    
    db.chore.create({
        chore_name: choreName,
        status: status,
        frequency_id: frequencyId,
        category_id: categoryId,
        assignee_id: assigneeId,
        difficulty: difficulty,
        notes: notes,
        createdAt: createdAt, 
        updatedAt: updatedAt
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

router.put('/update-chore', (req, res) => {
    res.send('/update-chore working');
});

router.delete('/delete-chore', (req, res) => {
    res.send('/delete-chore working');
});

module.exports = router;