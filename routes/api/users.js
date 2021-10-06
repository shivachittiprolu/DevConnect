const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose =require('mongoose');

const User =require('../../models/User'); 
const { JsonWebTokenError } = require('jsonwebtoken');
// @route api/users
// @desc Test route
// @access Public



router.post('/', async (req, res) => {
    const{ name, email,password } = req.body;
    const errors = [];
    try {
        // check if user exists
        let user  = await User.findOne({ email });

        if(user){
            return res.status(400).json({errors: {"msg" : `User ${email} already exists`}});
        }

        // check gravatarurl
        const avatar = gravatar.url(email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });

        //create User instance

        user = new User({
            name :name,
            email: email,
            password: password,
            avatar: avatar
        });

        // encrypt password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        
        // add user to DB

        await user.save();


        // return json token
        const payload = {
            user:{
                id: user.id
            }
        }

        jwt.sign(payload, config.get('jwtSecret'),{ expiresIn: 360000 } , (err, token) => {
            if(err) throw err;
            res.json({ token });
        })
 
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');   
    }
});



module.exports = router;