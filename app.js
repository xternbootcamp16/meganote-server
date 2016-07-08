require('dotenv').load();
var express = require('express');
var bodyParser = require('body-parser');
var noteRoutes = require('./routes/note-routes');
var headersMiddleware = require('./middleware/headers');

var app = express();

// Middleware
app.use(headersMiddleware);

// Body parsing for JSON POST/PUT payloads
app.use(bodyParser.json());

// Routes
app.use('/api/v1/notes', noteRoutes);

// CREATE a user
app.post('/users', function(req, res) {
  res.json({
    msg: 'HOORAY!'
  });
});

app.listen(3030, function() {
  console.log('Listening on http://localhost:3030...');
});
