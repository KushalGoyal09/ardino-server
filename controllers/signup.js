const User = require("../models/user");
const { getToken } = require("../service/auth");

const signUp = async (req, res) => {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    const token = getToken(user._id);
    res.status(201).json({ success: true, token, message: "User created"});
};

module.exports = signUp;
