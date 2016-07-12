var router = require('express').Router();
var Note = require('../models/note');

// READ all notes
router.get('/', function(req, res) {
  res.json(req.user.notes);
});

// READ one note
router.get('/:id', function(req, res) {
  res.json(req.user.notes.id(req.params.id));
});

// CREATE a note
router.post('/', function(req, res) {
  req.user.notes.push({
    title: req.body.note.title,
    body_html: req.body.note.body_html
  });

  req.user
    .save()
    .then(function(userData) {
      res.json({
        message: 'Successfully created note',
        note: userData.notes[userData.notes.length - 1]
      });
    });
});

// UPDATE a note
router.put('/:id', function(req, res) {
  var note = req.user.notes.id(req.params.id);
  note.title = req.body.note.title;
  note.body_html = req.body.note.body_html;
  note.updated_at = Date.now();

  req.user
    .save()
    .then(
      user => {
        res.json({
          message: 'Your changes have been saved.',
          note
        });
      }
    );
});

// DELETE a note
router.delete('/:id', function(req, res) {
  var note = req.user.notes.id(req.params.id);
  note.remove();

  req.user
    .save()
    .then(
      user => {
        res.json({
          message: 'That note has been removed.',
          note
        });
      }
    );
});

module.exports = router;
