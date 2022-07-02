const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = process.argv[2]

if(!location) {
    console.log('please provide a location');
} else {
    geocode(location, (error, {latitude,longitude,label}={}) => {

        if(error) {
            return console.log(error);
        }
        weather(latitude,longitude,(error,foreCastData)=>{
        if(error) {
            return console.log(error);
        }
            console.log(label);
            console.log(foreCastData);
        })
    })
}


