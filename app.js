if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
var express = require('express');
// var bodyParser = require('body-parser');
// var noteRoutes = require('./routes/note-routes');
// var userRoutes = require('./routes/user-routes');
// var sessionRoutes = require('./routes/session-routes');
// var headersMiddleware = require('./middleware/headers');
// var authMiddleware = require('./middleware/auth');

var app = express();
app.set('port', (process.env.PORT || 3030));
app.post('/', function(req, res) {
  //
});

// Middleware
// app.use(headersMiddleware);
// app.use(authMiddleware);

// Body parsing for JSON POST/PUT payloads
// app.use(bodyParser.json());

// Routes
// app.use('/api/v1/notes', noteRoutes);
// app.use('/api/v1/users', userRoutes);
// app.use('/api/v1/sessions', sessionRoutes);


app.listen(app.get('port'), function() {
  console.log(`Listening on ${app.get('port')}...`);
});
