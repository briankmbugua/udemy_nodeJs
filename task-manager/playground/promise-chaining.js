require('../src/db/mongoose')
const User = require('../src/models/user')
// // 62d00ed947e0e339eba45168



// User.findByIdAndUpdate('62d1f927158c74a394523236',{age:1000}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1000})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}


updateAgeAndCount('62d013bff3a9cf380f3107c6',450).then((count)=> {
    console.log(count)
}).catch((e)=>{
    console.log(e)
})