const express = require('express');
const router = express.Router();

// @route api/profile
// @desc Test route
// @access Public
router.get('/', (req, res) => {
    res.send('profile Route');
});

module.exports = router;