const request = require('request')

let geocode = (place, callback) => {
    const url = `http://api.positionstack.com/v1/forward?access_key=3f22aad88941706fe86a24fcd2bd2bdf&query=${place}`

    request({url,json: true}, (error, {body}) => {
        if (error) {
            callback('unable to connect to location services', undefined)
        } else if (body.data.length === 0) {
            callback('unable to find location', undefined)
        } else {
            // let lat = response.body.data[0].latitude
            // let long = response.body.data[0].longitude
            // let label = response.body.data[0].label
            const {latitude,longitude,label} = body.data[0]
            callback(undefined, {latitude, longitude,label}
            )
        }
    })
}

module.exports = geocode