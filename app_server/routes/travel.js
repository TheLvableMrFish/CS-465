var express = require('express');
var router = express.Router();

// Controllers
const controller = require('../controllers/travel');

/* GET home page. */
router.get('/', controller.travel);

module.exports = router;
