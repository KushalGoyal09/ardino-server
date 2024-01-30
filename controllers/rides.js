const Ride = require("../models/ride");

const userRides = async (req, res) => {
    const userId = req.userID;
    const rides = await Ride.find({ user: userId });
    res.status(200).json({ success: true, rides });
}

const allSimilarRides = async (req, res) => {
    const { rideID } = req.body;
    const ride = await Ride.findById(rideID);
    const rides = await Ride.find({
        startingLocation: ride.startingLocation,
        destinationLocation: ride.destinationLocation,
        _id: { $ne: rideID }
    });
    res.status(200).json({ success: true, rides });
}

module.exports = { userRides, allSimilarRides };