var db = require('../config/db');
var userSchema = require('./user-schema');

module.exports = db.model('User', userSchema);
