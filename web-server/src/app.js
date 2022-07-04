const path = require('path')
const express = require('express')

console.log(__dirname);
console.log(path.join(__dirname, '../public'));

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather',(req,res)=>{
    res.send({
        forecast: "rainy",
        location: "Kiambu"
    })
})


app.listen(5000, () => {
    console.log('server is up on port 5000.');
})