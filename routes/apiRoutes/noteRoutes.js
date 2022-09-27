const router = require('express').Router();
const {notes} = require('../../db/db.json');
const createNewNote = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let result = notes;

    res.json(result);
});

router.get('/notes/:id', (req, res) => {
    let result = notes[req.params.id];
    res.json(result);
})

router.post('/notes', (req, res) => {
   const note = createNewNote(req.body, notes);
   res.json(note); 
});

router.delete('/notes/:id', (req,res) => {
    const note = notes[req.params.id];
    console.log(req.params.id);
    notes.pop(note);
    res.json(note);
});

module.exports = router;