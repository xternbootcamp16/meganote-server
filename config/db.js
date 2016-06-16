var db = require('mongoose');
db.connect(process.env.DB_URI);

module.exports = db;
