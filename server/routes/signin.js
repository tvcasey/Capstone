const express = require('express');
const User = require('../models/User');
const UserSession = require('../models/UserSession');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = require('express')();

//module.exports = router => {    
       
router.post('/signup', (req, res, next) => {
        const { body } = req;
        const {
            firstName,
            lastName,
            password
        } = body;
        let {
            email
        } = body;
        
    if (!firstName) {
        return res.send({
            success: false,
            message: 'Enter your first name.'
        });
    }
    if (!lastName) {
        return res.send({
            success: false,
            message: 'Enter your last name.'
        })
    }
    if (!email) {
        return res.send({
            success: false,
            message: 'Please Enter a Valid Email Address.'
    });
}
    if (!password) {
        return res.send({
            success: false,
            message: 'Please Enter a Valid Password'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    },   (err, previousUsers) => {
        if (err) {
            return res.send({
                success: false,
                message: 'There is an error.'
            });
    }   else if (previousUsers.length > 0) {
            return res.send({
                success: false,
                message: 'Password already exists.'
            });    
        }
    

        const newUser = new User();

        newUser.email = email;
        newUser.firstName = firstName;
        newUser.lastName = lastName;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Sorry, Unable to Sign Up.'   
                });        
            }
                return res.send({
                    success: true,
                    message: 'Welcome Aboard- Signed Up.'
                });
            });
        });
    });
    router.post('/signin', (req, res, next) => {
        const { body } = req;
        const {
            password
        } = body;
        let {
            email
        } = body;
    
        if (!email) {
            return res.send({
                success: false,
                message: 'Please Enter a Valid Email Address.'
        });
    }
        if (!password) {
            return res.send({
                success: false,
                message: 'Enter Password to the Field.'
            });
        }

        email = email.toLowerCase();

        User.find({
            email: email
        },  (err, users) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Server Error.'                    
                });
            }
        
            if (users.length != 1) {
                return res.send({
                    success: false,
                    message: 'Invalid Entry.'
                });
        }

        const user = users[0];
        if (!user.validPassword(password)) {
            return res.send({
                success: false,
                message: 'Error'
            });
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.save((err, doc) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error'
                });
            }

            return res.send({
                success: true,
                message: 'It is official- You are Signed In.',
                token: doc._id
            });
        });
    });
    });
    router.get('/verify', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        },  (err, sessions) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Verify Error.'
                });
        }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Oh My, Something Went Wrong.'
                })
            } else {
                return res.send({
                    success: true,
                    message: 'Good, Glad You Are Here.'
                });
            }
        });
        });
        router.get('/logout', (req, res, next) => {
            const { query } = req;
            const { token } = query;
    
            UserSession.findOneAndUpdate({
            
                _id: token,
                isDeleted: false
            },  {
                $set:{
                    isDeleted:true}
            },  null, (err, sessions) => {  
                if (err) {
                    console.log(err);
                    return res.send({
                        success: false,
                        message: 'Logout Error.'
                    });
            }
                    return res.send({
                        success: true,
                        message: 'Good, Glad You Were Here.'
                    });
                });
            });
    
    
    











module.exports = router;


