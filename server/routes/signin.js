const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = (app) => {



app.post('/signup', (req, res, next) => {
    const { body } = req;
    const {
        password
    } = body;
    let {
        email
    } = body;

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
            return res.end('Error')
    }   else if (previousUsers.length > 0) {
            return res.end('There Already is an Account for this Email.')
    }

        const newUser = new User();

        newUser.email = email;
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


