const express = require('express');
const router = express.Router();
const auth = require("../middleware/auth");
const { allSimilarRides } = require('../controllers/rides');

router.post("/", auth, allSimilarRides);

module.exports = router;