require('dotenv').load();
var express = require('express');
var Note = require('./models/note');
var bodyParser = require('body-parser');

var app = express();

// Middleware
app.use(function(req, res, next) {
  // Allow CORS
  res.header('Access-Control-Allow-Origin', '*');

  // Allow Content-Type header (for JSON payloads)
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Body parsing for JSON POST/PUT payloads
app.use(bodyParser.json());

// READ all notes
app.get('/', function(req, res) {
  Note
    .find()
    .sort({ updated_at: 'desc' })
    .then(function(notes) {
      res.json(notes);
    });
});

// CREATE a note
app.post('/', function(req, res) {
  var note = new Note({
    title: req.body.note.title,
    body_html: req.body.note.body_html
  });

  note
    .save()
    .then(function(noteData) {
      res.json({
        message: 'Successfully created note',
        note: noteData
      });
    });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
