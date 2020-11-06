const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');
const Sequelize = require('sequelize');

router.get('/get-categories', (req, res) => {
    db.category.findAll()
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('GET /get-categories', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.get('/get-categories-by-userId/:userId', (req, res) => {
    const userId = req.params.userId;

    db.category.findAll({
        where: {
            user_id: {
                [Sequelize.Op.contains]: [userId]
            }
        }
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('GET /get-categories-by-userId', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.get('/get-category/:id', (req, res) => {
    const id = req.params.id;
    
    db.category.findAll({
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('GET /get-category', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.post('/add-category', (req, res) => {
    const { 
        categoryName,
        userIds
     } = req.body;

     db.category.create({
         category_name: categoryName,
         user_id: userIds
     })
     .then(data => {
        res.status(200);
        return res.json(data);
     })
     .catch(err => {
         logger.error('POST /add-category', err);
         res.status(500);
         return res.json({ errMessage: 'Server Error' });
     })
});

router.put('/update-category/:id', (req, res) => {
    const id = req.params.id;
    const { 
        categoryName,
        userIds
     } = req.body;

    db.category.update({
        category_name: categoryName,
        user_id: userIds
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
        logger.error('PUT /update-category', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    });
});

router.delete('/delete-category/:id', (req, res) => {
    const id = req.params.id;
    
    db.category.destroy({
        where: {
            id: id
        }
    })
    .then(data => {
        res.status(200);
        return res.json(data);
    })
    .catch(err => {
        logger.error('DELETE /delete-category', err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    })
});

module.exports = router;
