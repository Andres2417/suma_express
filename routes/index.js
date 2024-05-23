var express = require('express');
const { suma } = require('../suma');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Suma' });
});

module.exports = router;
