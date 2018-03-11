var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/emails/custom', function(req, res, next) {
  res.status(200).json({ emails: ["me@gmail.com", "you@gmail.com"] });
});

module.exports = router;
