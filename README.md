# notes-app

## notes-app is console application used for managing notes.

## Requirements
- Node is runtime environment used to run this javascript project and Node should be installed on local pc to run this project.

## Tools
### npm
- npm stands for node package manager used for downloading dependencies required for the development. Below
  command for initializing npm in our main project directory and should be ran on project directory only.
  ```sh
  npm init
  ```
- The above command will create two files namely, package.json and package-lock.json which contains all the information about dependencies.
- node_modules will be created which will stores actual api.

- To install a dependency having name <package-name> use
  ```sh
  npm install <package-name>
  ```
  
- To uninstall a dependency
  ```sh
  npm uninstall <package-name>
  ```

## Dependencies
- chalk v4.1.2 : Used for styling and coloring console text
- yargs v12.0.2: Used for parsing the command line text and for defining the command and handling the command
- fs:  fileSystem is a core Node module used for accessing, managing, and modifying files.

## Information about working
- Program starts with app.js file which contains only definitions of command like add, remove, list, read and also defines handler for the command using yargs dependency.
- All the handler code involves code for executing the command using a function and all these functions are present in notes.js. So, 
  ```sh
  const notes = require('notes.js');
  ```
  used for importing neccessary functions from notes.js file.
- At the end of notes.js 
  ```sh
  module.exports = { //put the required function which need to be exported }
  ```
  is used to exports the functions, so that app.js can imported that functions.
- There are total of 6 functions present in notes.js file

#### addNote(title, body)
- This function will first loads all notes as array and checks using 'title' property after the notes that current note is not duplicate of any existing note.
- If it is found that it is duplicate note, then an Error message 'Note already exits!' else note will be added to notes.json file.

#### removeNote(title)
- It will load all notes using loadNotes() function. Then checks if there is note whose title matches with title of given note, then it removes it from the notes.json file and if not, then it will print Error message as 'Note not exists!'.
  
#### listNotes()
- It will load all notes using loadNotes() function. Then it will print 'Your Notes' in style and then will print tite of all the existing notes.
  
#### readNote(title)
- It will loads all notes using loadNotes() function. Then checks if there exits any note which has title equals to current notes' title, if yes,then 
  prints title and body of the note in styled text. If no, print error message 'Note not exists!'.

## Usage
- Four operation can be done using this project i.e. Adding a note, Removing, Listing all notes and Reading a specific note.
- To add a note,
  ```sh
  node app.js add --title="<title-name>" --body="<body>"
  ```
- To remove a note
  ```sh
  node app.js remove --title="<title-name>"
  ```
- To list all the notes
  ```sh
  node app.js list
  ```
- To read a specific note,
  ```sh
  node app.js read --title="<title-name>"
  ```
