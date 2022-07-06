const path = require('path')
const express = require('express')
const hbs = require('hbs')


const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, '../templates/partials')

//setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup public directory to serve
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
        name: 'Brian Kinyanjui',
        helpText: 'help message'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast: "rainy",
        location: "Kiambu"
    })
})

app.get('/help/*',(req,res)=>{
    res.render('404',{
        message: 'help article not found'
    })
})

app.get('*',(req,res)=>{
    res.render('404', {
        message: 'page not found'
    })
})

app.listen(5000, () => {
    console.log('server is up on port 5000.');
})