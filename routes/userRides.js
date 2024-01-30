const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { userRides } = require('../controllers/rides');

router.get("/", auth, userRides);

module.exports = router;