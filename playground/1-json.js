const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }


// const bookJSON = JSON.stringify(book); //takes in an object and outputs JSON string
// fs.writeFileSync('1-json.json',bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json') //buffer
// const dataJSON = dataBuffer.toString() //JSON string
// const data = JSON.parse(dataJSON) // normal javascript object
// console.log(data.title);

const data =fs.readFileSync('1-json.json').toString() //Json string

const JsObject = JSON.parse(data) //object

JsObject.name = "brian",
JsObject.age = 26

const JSONdata = JSON.stringify(JsObject)
console.log(JSONdata);
fs.writeFileSync('1-json.json',JSONdata)



