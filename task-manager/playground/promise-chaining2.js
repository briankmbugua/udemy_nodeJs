require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('62d5bdde8bfbb327771edb10').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: true})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id) => {
    const deleteTask = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: true})
    return count

}

deleteTaskAndCount('62cf46760f4d4b4f54911247').then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})