const fs = require('fs');
const chalk = require('chalk');


// For removing a note using title of note
const removeNote = function(title){
    const notes = loadNotes();

    const updatedNotes = notes.filter((note) => note.title !== title)

    if(updatedNotes.length === notes.length){
        console.log(chalk.red.inverse.bold("Note not found!"));
    }
    else{
        saveNotes(updatedNotes);
        console.log(chalk.green.inverse.bold("Removed Successfully"));
    }
}

// Adding a note using title and body of the note
function addNote(title, body) {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    

    if(duplicateNote === undefined){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.green.inverse.bold("New note added successfully!"));
    }
    else{
        console.log(chalk.red.inverse.bold("Title is already taken!"));
    }
}

// Saving an notes array to notes.json
const saveNotes = function(notes){

    const notesJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesJSON);
}

// loads the notes array and returns it
const loadNotes = function () {

    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
}

// listing all the notes
const listNotes = function(){
    const notes = loadNotes();

    console.log(chalk.bgBlueBright.bold("Your Notes"));
    notes.forEach((note) => console.log(chalk.green(note.title)));
}

// Printing the specified note using title
const readNote = function(title){
    const notes = loadNotes();

    const note = notes.find((note) => note.title === title);

    if(note !== undefined){
        console.log("Title:",chalk.inverse(note.title));
        console.log("Body:", note.body);
    }
    else{
        console.log(chalk.red.bold.inverse("Note not exits!"));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};
