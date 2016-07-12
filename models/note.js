var db = require('../config/db');
var noteSchema = require('./note-schema');

module.exports = db.model('Note', noteSchema);
