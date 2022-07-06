const path = require('path')
const express = require('express')


const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))
app.get('',(req,res)=>{
    res.render('index', {
        title: 'Weather',
        name: 'Brian Kinyanjui'
    })
})

app.get('/about', (req,res)=>{
    res.render('about',{
        title: 'About me',
        name: 'Brian Kinyanjui'
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: 'help page',
        name: 'Brian Kinyanjui'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: "rainy",
        location: "Kiambu"
    })
})


app.listen(5000, () => {
    console.log('server is up on port 5000.');
})