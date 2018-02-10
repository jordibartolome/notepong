var express = require('express');
var router = express.Router();

var models = require('../server/models/allModels.js');
var usersControllers = require('../server/controllers/usersControllers');

/* GET home page. */
// router.get('/', function(req, res, next) {
// 	res.sendFile(path.join(__dirname, '/../views/index.html'));
// });

router.route('/create').post(usersControllers.create)

module.exports = router;
