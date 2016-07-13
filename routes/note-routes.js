var router = require('express').Router();

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
  var note = req.user.notes.create({
    title: req.body.note.title,
    body_html: req.body.note.body_html
  });

  req.user.notes.push(note);

  req.user
    .save()
    .then(
      _userData => {
        res.json({
          message: 'Successfully created note',
          note: note,
        });
      }
    );
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
      () => {
        res.json({
          message: 'Your changes have been saved.',
          note: note
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
      () => {
        res.json({
          message: 'That note has been deleted.',
          note: note
        });
      }
    );
});

module.exports = router;
