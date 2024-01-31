const User = require("../models/user");

const basicDetails = async (req, res) => {
    const userId = req.userID
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ success: false, message: "User not found" });
    }
    res.status(200).json({ success: true, name: user.name, email: user.email, numberOfRides: user.rides.length });
}

module.exports = basicDetails;