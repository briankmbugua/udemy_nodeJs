const http = require('http')
const accesKey = '9cddc55b23f1b6516479b12f872e4f6c';
const url = `http://api.weatherstack.com/current?access_key=${accesKey}&query=40,%-75&units=m`

const request = http.request(url, (response) => {


    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()

        console.log(chunk);
    })
    response.on('end', () => {

        const body = JSON.parse(data)
        console.log(body);
    })
})

request.on('error', (error) => {
    console.log(error);
})

request.end()