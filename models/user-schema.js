var db = require('../config/db');
var bcrypt = require('bcryptjs');
var noteSchema = require('./note-schema');

var userSchema = db.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordDigest: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  notes: [noteSchema],
});

userSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

userSchema.methods.toJSON = function() {
  var user = this.toObject();
  delete user.passwordDigest;
  delete user.__v;
  return user;
};

userSchema.methods.authenticate = function(password, callback) {
  console.log('comparing passwords');
  bcrypt.compare(password, this.passwordDigest, function(err, isMatch) {
    callback(isMatch);
  });
};

module.exports = userSchema;
