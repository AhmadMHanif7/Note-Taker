const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {                      //Creates new note
    const note = body;                                          //Saves JSON into notes variable
    notesArray.push(note);                                      //Pushes to notes array
    fs.writeFileSync(                                           //Writes and updates the file
        path.join(__dirname, '../data/notes.json'),             //Path of file
        JSON.stringify({ notes: notesArray}, null, 2)           //Parse JSON with proper formatting
    );
    return note;
  }

  module.exports = createNewNote;