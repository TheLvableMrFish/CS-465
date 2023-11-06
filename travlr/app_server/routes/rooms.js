var express = require('express');
var router = express.Router();

// Controllers
const controller = require('../controllers/rooms');

/* GET home page. */
router.get('/', controller.rooms);

module.exports = router;