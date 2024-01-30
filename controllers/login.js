const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { getToken } = require("../service/auth");

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if(!user) {
        return res.status(404).json({ message: "User not found" });
    }
    if(user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = getToken(user._id);
    res.status(200).json({success: true ,token, message: "Login successful"});
}

module.exports = login;