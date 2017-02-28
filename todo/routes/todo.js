var express = require('express');
var router = express.Router();

router.get('/todo', function(req, res, next) {
  res.send('TODO API');
});

module.exports = router;
