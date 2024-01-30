const express = require('express');
const router = express.Router();
const { createRide } = require("../controllers/admin");
const auth = require("../middleware/auth");

router.post("/", auth ,createRide);

module.exports = router;