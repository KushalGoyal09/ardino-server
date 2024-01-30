const exprss = require('express');
const router = exprss.Router();
const auth = require("../middleware/auth");
const basicDetails = require('../controllers/home');

router.get('/', auth, basicDetails);

module.exports = router;