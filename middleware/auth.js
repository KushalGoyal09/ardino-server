const { getUserId } = require("../service/auth");

const auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({ message: "Token not found" });
    }
    const userID = getUserId(token);
    if(!userID) {
        return res.status(401).json({ message: "Invalid token" });
    }
    req.userID = userID;
    next();
}

module.exports = auth;