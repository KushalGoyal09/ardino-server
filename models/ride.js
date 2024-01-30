const {Schema, model} = require('mongoose')

const rideSchema = new Schema({
    startingLocation: {
        type: String,
        required: true
    },
    destinationLocation: {
        type: String,
        required: true
    },
    timeTakenInMin: {
        type: Number,
        required: true
    },
    potHoles: {
        type: Number,
        required: true
    },
    animal: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Ride = model('Ride', rideSchema);

module.exports = Ride;
