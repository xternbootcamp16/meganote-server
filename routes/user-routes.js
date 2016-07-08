var router = require('express').Router();

// CREATE a user
router.post('/', function(req, res) {
  res.json({
    msg: 'HOORAY!'
  });
});

module.exports = router;
