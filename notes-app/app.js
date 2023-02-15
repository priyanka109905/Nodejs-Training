// First module: file System Module
const fs= require('fs');
fs.writeFileSync('notes.txt','Hiii')
fs.appendFileSync('notes.txt','bye')

//Second module: .export
const name=require('./utils')
console.log(name);


//Excersie

/*const getNotes=require('./notes');
const msg=getNotes()
console.log(msg);
*/

//Validator

const validator=require('validator');
console.log(validator.isEmail('priyanka@123.com'));

// Chalk

const chalk=require('chalk');
const greenmsg=chalk.red('Successs');
console.log(greenmsg);