const express = require('express');
const router = express.Router();

// @route api/auth
// @desc Test route
// @access Public
router.get('/', (req, res) => {
    res.send('auth Route');
});

module.exports = router;