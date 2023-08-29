

const jwt = require("jsonwebtoken");

/*
    @description: create a roken for the user
    @param {user} 
    @return {string} token
 */

const generateToken = (user) => {
    return jwt.sign({id: user.id, email: user.email}, process.env.SECRET_PASSWORD, {expiresIn: '1h'});
}

module.exports = generateToken;