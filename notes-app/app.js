const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js');

//customize yargs version

yargs.version('1.1.0')

//creat add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title,argv.body)
    }
})
//creat remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
       title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})
//creat list command
yargs.command({
    command: 'list',
    describe: 'list all  notes',
    handler(){
        notes.listNotes()
    }
})
//creat read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})

//add, remove, read, list

yargs.parse()

// console.log(yargs.argv);
