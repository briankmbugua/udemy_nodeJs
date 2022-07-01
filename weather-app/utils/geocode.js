const request = require('request')

let geocode = (place, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=7c4eca4247dab4023089acab6bf9dc5b&query=${place}`

    request({url: url,json: true}, (error, response) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (response.body.data.length === 0) {
            callback('unable to find location', undefined)
        } else {
            let lat = response.body.data[0].latitude
            let long = response.body.data[0].longitude
            let label = response.body.data[0].label
            callback(undefined, {latitude: lat, longitude: long,label: label}
            )
        }
    })
}

module.exports = geocode