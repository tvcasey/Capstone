const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcrypt');
const router = express.Router();
const app = require('express')();

module.exports = router => {    
       
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
        return res.end({
            success: false,
            message: 'Enter your first name.'
        });
    }
    if (!lastName) {
        return res.end({
            success: false,
            message: 'Enter your last name.'
        })
    }
    if (!email) {
        return res.end({
            success: false,
            message: 'Please Enter a Valid Email Address.'
    });
}
    if (!password) {
        return res.end({
            success: false,
            message: 'Please Enter a Valid Password'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    },   (err, previousUsers) => {
        if (err) {
            return res.end({
                success: false,
                message: 'There is an error.'
            });
    }   else if (previousUsers.length > 0) {
            return res.end({
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
                return res.end({
                    success: false,
                    message: 'Sorry, Unable to Sign Up.'   
                });        
            }
                return res.end({
                    success: true,
                    message: 'Welcome Aboard- Signed Up.'
                });
            });
        });
    });

};
//module.exports = app;


