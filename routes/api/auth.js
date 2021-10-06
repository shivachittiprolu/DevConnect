const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route api/auth
// @desc Test route
// @access Public
router.get('/', auth, async (req, res) => {
    res.send('Token Worked');
    console.log(req.user);
    // try {
    //     console.log(`user id: ${req}`);
    //     const user = await User.findById(req.user.id).select('-password');
    //     res.json(user);
    // } catch (err) {
    //     console.error(err.messsage);
    //     res.status(500).send('Server Error');   
    // }
});

module.exports = router;