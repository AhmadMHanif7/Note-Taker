const fs = require('fs');                               //Pull in fs library
const path = require('path');                           //Pull in the path library
const express = require('express');                     //Pull in express library

const PORT = process.env.PORT || 3001;                  //Looks for the port in the environment otherwise 3001

const app = express();

app.use(express.urlencoded({extended:true}));           //Parse incoming string or array data
app.use(express.json())                                 //Parse incoming JSON data

const {notes} = require('./db/db.json');                  //Pull in the database


function createNewNote(body, notesArray) {              //Creates a New Note
    const note = body;                                  //Body is saved into the note variable
    notesArray.push(note);                              //Pushes the input to the notesArray

    fs.writeFileSync(                                   //Updates the file to include the new data
        path.join(__dirname, './db/db.json'),           //Attaches the path to the json file
        JSON.stringify({notes:notesArray}, null, 2)     //Converts the string to Json, with the proper formatting
    );
    return note;
}

function validateNote(note) {
    if(!note.title || typeof note.title !== 'string'){
        return false;
    }
    if(!note.text || typeof note.text !== 'string'){
        return false;
    }
    return true;
}

app.get('/api/notes', (req,res) => {
    let results = notes;
    res.json(results);
});

app.post('/api/notes', (req,res) => {
    if (!validateNote(req.body)) {
        res.status(400).send('The note is not properly formatted')
    }  else {
        const note = createNewNote(req.body, notes);
        res.json(note);
    }
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
})