const chalk = require('chalk');
const { demandOption } = require('yargs');
const yargs = require('yargs');
const { listNotes } = require('./notes.js');
const notes = require('./notes.js');

// Customizing the version of yargs
yargs.version('1.1.0');

// Creating add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// Creating remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

// Creating read command
yargs.command({
    command: 'read',
    describe: 'To read a note',
    builder:{
        title: {
            describe: "Read title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

// Creating list command
yargs.command({
    command: 'list', 
    describe: 'To read all notes',
    handler(){
        notes.listNotes();
    }
})

yargs.parse();

