const jwt = require("jsonwebtoken");

const getToken = (userID) => {
    return jwt.sign({userID}, process.env.JWT_SECRET);
}

const getUserId = (token) => {
    return jwt.verify(token, process.env.JWT_SECRET).userID;
}

module.exports = { getToken, getUserId };