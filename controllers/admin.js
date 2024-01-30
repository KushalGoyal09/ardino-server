const Ride = require("../models/ride");

const createRide = async (req, res) => {
    const { startingLocation, destinationLocation, timeTakenInMin, potHoles, animal} = req.body;
    const userId = req.userID;
    const ride = await Ride.create({
        startingLocation,
        destinationLocation,
        timeTakenInMin,
        potHoles,
        animal,
        user: userId
    });
    res.status(201).json({ success: true, ride });
}

module.exports = { createRide };