const express = require('express');
const router = express.Router();
const db = require('../models');
const logger = require('../logger');
const generator = require('generate-password');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_APIKEY);
const bcrypt = require('bcrypt');
const Sequelize = require('sequelize');

router.post('/login', (req, res) => {
    const usernameInput = req.body.username;
    const passwordInput = req.body.password;

    db.user.findAll({
        where: {
            username: {
                [Sequelize.Op.iLike]: '%' + usernameInput
            }
        }
    })
    .then(data => {
        if(data.length === 0) {
            res.status(401);
            return res.json({errMessage: 'User Not Found'});
         }

        const pw = data[0].password;

        bcrypt.compare(passwordInput, pw, function(err, result) {
            if(err) {
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error' });
            }
            if(!result) {
                res.status(401);
                return res.json({ errMessage: 'Incorrect Password' });
            }
            res.status(200);
            return res.json(data[0]);
        });
    })
    .catch(err => { 
        logger.error(err);
        res.sendStatus(500);
        return res.json({errMessage: 'Server Error' });
    });
});

router.post('/sign-up', (req, res) => {
    const { username, password, firstName, lastName } = req.body;
    const emailFormatRegEx = /\S+@\S+/;
    let isEmailAddressValid = emailFormatRegEx.test(username);

    if(isEmailAddressValid) {
        if(password.length >= 8) {
            db.user.findAll({
                where: {
                    username: username
                }
            })
            .then(data => {
                if (data.length === 0) {
                    bcrypt.hash(password, 10, function(err, hash) {
                        if(err) {
                            logger.error(err);
                            res.status(500);
                            return res.json({ errMessage: 'Server Error1' });
                        }
                        db.user.create({
                            username: username,
                            password: hash,
                            first_name: firstName,
                            last_name: lastName
                        })
                        .then(data => {
                            //Create default category for new user
                            db.category.create({
                                category_name: 'My Chores',
                                user_id: [data.id]
                            })
                            .then(defaultCategory => {
                               res.status(200);
                               return res.json(data);
                            })
                            .catch(err => {
                                logger.error(err);
                                res.status(500);
                                return res.json({ errMessage: 'Server Error' });
                            }) 
                        })
                        .catch(err => {
                            logger.error(err);
                            res.status(500);
                            return res.json({ errMessage: 'Server Error2'});
                        });
                    });
                } else {
                    res.status(401);
                    return res.json({ errMessage: `Account with email ${username} already exists` });
                }
            })
            .catch(err => {
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error3'});
            })   
        } else {
            res.status(400);
            return res.json({ errMessage: 'Password must be at least 8 characters' });
        }
     } else {
        res.status(400);
        return res.json({ errMessage: 'Invalid email address' });
    }
});

router.put('/forgot-password', (req, res) => {
    // const newPassword = generator.generate({
    //     length: 8,
    //     numbers: true
    // });

    const newPassword = 'password';
    const username = req.body.username;
    const msg = {
        to: username,
        from: 'natalievasquez11@gmail.com',
        subject: 'Forgotten Password Reset',
        text: `\nYou password has been reset. Please use your new password to login and change your password.\n
        New Password: ${newPassword}\n`,
      };
      const emailFormatRegEx = /\S+@\S+/;
      let isEmailAddressValid = emailFormatRegEx.test(username);
  
      if(isEmailAddressValid) {
          bcrypt.hash(newPassword, 10, function(err, hash) {
            if(err) {
                logger.error(err);
                res.status(500);
                return res.json({ errMessage: 'Server Error' });
            }
            db.user.update({
                password: hash
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
      } else {
          res.status(400);
          return res.json({ errMessage: 'Invalid email address' });
      }
    
});

module.exports = router;
