const request = require('request')
let weather = (lat, long, callback) => {

    request({
        url: `http://api.weatherstack.com/current?access_key=ceb9236cf6a4791880945c2d580eb26a&query=${lat},%${long}&units=m`,json: true},
         (error, response) => {
        if (error) {

            let err = 'unable to connect to weather service'
            callback(err,undefined)
        } else if (response.body.error) {
            let err = response.body.error
            callback(err,undefined)
        } else {

            let data = `The weather is currently ${response.body.current.weather_descriptions[0]}, The temparature is ${response.body.current.temperature} degrees and there is ${response.body.current.precip} chance of raining.`
            callback(undefined,data)
        }
    })
}


module.exports = weather