var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('groceries', { title: 'Search Results for Groceries' });
});

module.exports = router;