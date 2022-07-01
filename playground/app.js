const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json').toString()

let obj = JSON.parse(dataBuffer)

console.log(dataBuffer);
console.log(obj.name);