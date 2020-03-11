var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.get('/info/:id', function (req, res, next) {
  res.render('info', { id: req.params.id });
});

router.post('/info', function (req, res, next) {
  var name = req.body.name
  var password = req.body.password
  var email = req.body.email

  req.check('name', 'emptyname').notEmpty();
  req.check('password', 'emptyname').notEmpty();
  req.check('email', 'emptyname').notEmpty();
  const errors = req.validationErrors();

  if (errors) {
    console.log(errors)
    req.session.success = false;
    req.session.errors = errors
    res.redirect('/')
  }
  else {
    if (name == 'ahmed' && (password == '123456')) {
      req.session.errors = null;
      req.session.success = true;
      res.render('info', { name: req.body.name });

    }
    else {
      res.render('error')

    }


  }

});




module.exports = router;
