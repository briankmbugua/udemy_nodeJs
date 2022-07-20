require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('62d5bdde8bfbb327771edb10').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: true})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})