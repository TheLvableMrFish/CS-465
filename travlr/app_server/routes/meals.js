var express = require('express');
var router = express.Router();

// Controllers
const controller = require('../controllers/meals');

/* GET home page. */
router.get('/', controller.meals);

module.exports = router;