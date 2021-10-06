const config = require('config')
const { header } = require('express-validator')
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    //get token from header
    const token = req.header('x-auth-token')

    //Check if token exists
    if(!token){
        return res.status(401).json({msg: 'No token, Access denied'})
    }

    //verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        // console.log(decoded);
        req.user = jwt.decode.user;
        next();
    } catch (err) {
        res.status(401).json({msg: 'Token invalid'})
    }
}