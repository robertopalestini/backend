var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
      layout:'admin/layout'
  });
});

module.exports = router;
