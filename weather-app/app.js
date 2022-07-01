const geocode = require('./utils/geocode')
const weather = require('./utils/weather')

const location = process.argv[2]

if(!location) {
    console.log('please provide a location');
} else {
    geocode(location, (error, data) => {

        if(error) {
            return console.log(error);
        }
        weather(data.latitude,data.longitude,(error,foreCastData)=>{
        if(error) {
            return console.log(error);
        }
            console.log(data.label);
            console.log(foreCastData);
        })
    })
}


