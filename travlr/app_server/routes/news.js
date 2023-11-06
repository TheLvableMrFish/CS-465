var express = require('express');
var router = express.Router();

// Controllers
const controller = require('../controllers/news');

/* GET home page. */
router.get('/', controller.news);

module.exports = router;