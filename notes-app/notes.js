const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=> {
    return 'Your notes...'
}

const addNote = (title, body)=> {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=> note.title === title
    )

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('new note added'));
    } else {
        console.log(chalk.red.inverse('Note title taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{

    try {
        const dataBuffer = fs.readFileSync('notes.json') //data buffer
        const dataJSON = dataBuffer.toString() //JSON string
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const removeNotes = (title)=> {



    const notes = loadNotes()


    const checktitle = note => note.title === title;

    if (notes.some(checktitle)) {
        remainingArr = notes.filter(function (data) {
            return data.title != title
        });
        console.log(chalk.green.inverse('Note removed!'));
        saveNotes(remainingArr)
    } else {
        console.log(chalk.red.inverse('no note found'));
    }
}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes!'));
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    let note = notes.find(note => note.title === title)
    if(note) {
        console.log(chalk.yellow(note.title));
        console.log(note.body);
    } else {
        console.log(chalk.red.inverse('not found'));
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote

}