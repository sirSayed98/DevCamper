var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', success: req.session.success, errors: req.session.errors });
});
module.exports = router;
