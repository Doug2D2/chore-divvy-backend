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
        logger.error(err);
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
         logger.error(err);
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
        logger.error(err);
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
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    })
});

module.exports = router;