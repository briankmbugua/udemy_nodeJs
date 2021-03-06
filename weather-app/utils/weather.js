const request = require('request')
let weather = (lat, long, callback) => {

    request({
        url: `http://api.weatherstack.com/current?access_key=9cddc55b23f1b6516479b12f872e4f6c&query=${lat},%${long}&units=m`,json: true},
         (error, {body}) => {
        if (error) {

            let err = 'unable to connect to weather service'
            callback(err,undefined)
        } else if (body.error) {
            // let err = response.body.error
            const {error:err} = body
            callback(err,undefined)
        } else {
            const{weather_descriptions,temperature,precip} = body.current
            let data = `The weather is currently ${weather_descriptions}, The temparature is ${temperature} degrees and there is ${precip} chance of raining.`
            callback(undefined,data)
        }
    })
}


module.exports = weather