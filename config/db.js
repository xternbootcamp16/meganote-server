var db = require('mongoose');
db.Promise = global.Promise;
db.connect(process.env.DB_URI);

module.exports = db;
