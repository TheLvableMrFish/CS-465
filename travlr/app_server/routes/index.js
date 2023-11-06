var express = require('express');
var router = express.Router();

// Controllers
const controller = require('../controllers/main');

/* GET home page. */
router.get('/', controller.index);

module.exports = router;
