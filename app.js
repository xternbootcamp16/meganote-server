require('dotenv').load();
var express = require('express');
var Note = require('./models/note');

var app = express();

app.get('/', function(req, res) {
  Note
    .find()
    .then(function(notes) {
      res.json(notes);
    });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
