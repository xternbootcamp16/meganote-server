var db = require('../config/db');

var noteSchema = db.Schema({
  title: String,
  body_html: String,
  body_text: String,
  updated_at: { type: Date, default: Date.now }
});

var Note = db.model('Note', noteSchema);

module.exports = Note;
