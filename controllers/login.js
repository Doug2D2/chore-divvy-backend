const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');
const generator = require('generate-password');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);

router.post('/login', (req, res) => {
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;

    db.user.findAll({
        where: {
            username: usernameInput,
            password: passwordInput
        }
    })
    .then(data => {
        if(data.length === 0) {
           res.status(401);
           return res.json({errMessage: 'User Not Found'});
        }
        res.status(200);
        return res.json(data[0]);
    })
    .catch(err => { 
        logger.error(err);
        res.sendStatus(500);
        return res.json({errMessage: 'Server Error'});
    });
});

router.post('/sign-up', (req, res) => {
    const { username, password, firstName, lastName } = req.body;

    db.user.findAll({
        where: {
            username: username
        }
    })
    .then(data => {
        if(password.length <= 8) {
            res.status(400);
            return res.json({ errMessage: 'Password must be at least 8 characters' });
        } else if(data.length === 0) {
            db.user.create({
                username: username,
                password: password,
                first_name: firstName,
                last_name: lastName
            })
            .then(data => {
                res.status(200);
                res.json(data);
            })
            .catch(err => {
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error'});
            });
        } else {
            res.status(401);
            return res.json({ errMessage: `Account with email ${username} already exists`})
        }
    })
    .catch(err => {
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error'});
    })    
});

router.put('/forgot-password', (req, res) => {
    const newPassword = generator.generate({
        length: 8,
        numbers: true
    });

    const username = req.body.username;

    const msg = {
        to: username,
        from: 'natalievasquez11@gmail.com',
        subject: 'Forgotten Password Reset',
        text: `\nYou password has been reset. Please use your new password to login and change your password.\n
        New Password: ${newPassword}\n`,
      };

    db.user.update({
        password: newPassword
    }, {
        where: {
            username: username
        }
    })
    .then(data => {
        if(data.length === 0 || data[0] === 0) {
            res.status(400);
            logger.error(`Username ${username} doesn't exist.`);
            return res.json({ errMessage: `Username ${username} doesn't exist.` });
        } 

        sgMail
            .send(msg)
            .then(() => {
                res.status(200);
                res.json(data);
            })
            .catch((err) => {
                res.status(500);
                logger.error(err);
                return res.json({ errMessage: 'Unable to send email.' });
            });
    })
    .catch(err => {
        logger.error(err);
        res.status(500);
        return res.json({ errMessage: 'Server Error' });
    })
});

module.exports = router;
