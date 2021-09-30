const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// @route api/users
// @desc Register user
// @access Public
router.post('/',
    // [
    //     check('name', 'Name is required').not().isEmpty(),
    //     check('email','please enter a valid email').isEmail(),
    //     check('password','please enter password of minimum length 6 character').isLength({
    //     min: 6
    // })
    // ],
    (req, res) => {
        // const errors = req.validationResult(req);
        // if(!errors.isEmpty()){
        //     return res.status(400).json({errors: errors.array()});
        // } 
        console.log(req.body); 
        res.send('User Route');
    
        
    
});

module.exports = router;