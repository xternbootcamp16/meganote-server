var db = require('../config/db');

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
  updated_at: {
    type: Date,
    default: Date.now
  }
});

userSchema.pre('save', function(next) {
  this.updated_at = Date.now();
  next();
});

var User = db.model('User', userSchema);

module.exports = User;
