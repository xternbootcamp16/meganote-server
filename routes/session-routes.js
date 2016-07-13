var router = require('express').Router();
var jwt = require('jsonwebtoken');
var User = require('../models/user');

// Login
router.post('/', (req, res) => {
  const message = 'We were unable to log you in with those credentials.';
  User
    .findOne({
      username: req.body.user.username
    })
    .then(
      user => {
        if (!user) { res.status(401).json({ message }); }

        user
          .authenticate(req.body.user.password)
          .then(
            (_isMatch) => {
              // correct password
              var token = jwt.sign(
                { _id: user._id },
                process.env.JWT_SECRET,
                { expiresIn: 60*60*24 }
              );
              res.json({
                user,
                authToken: token
              });
            },

            (_err) => {
              res.status(401).json({ message });
            }
          );
      }
    );
});

module.exports = router;
