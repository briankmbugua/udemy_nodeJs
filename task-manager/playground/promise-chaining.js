require('../src/db/mongoose')
const User = require('../src/models/user')

// // 62d00ed947e0e339eba45168



User.findByIdAndUpdate('62d1f927158c74a394523236',{age:1000}).then((user)=>{
    console.log(user)
    return User.countDocuments({age: 1000})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})