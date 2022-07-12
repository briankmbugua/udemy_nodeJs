// const mongodb = require('mongodb')

// const mongoClient = mongodb.MongoClient

const {
    MongoClient,
    ObjectId
} = require('mongodb')

const connectionURL = "mongodb://localhost:27017"

const databaseName = "task-manager"


MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({_id: new ObjectId("62cb2e2aabebdcc89896cc29")}, (error,user)=>{
    //     if(error) {
    //         return console.log('unable to fetch');
    //     }

    //     console.log(user);
    // })

    // db.collection('users').find({age: 50}).toArray((error,users)=>{
    //     console.log(users);
    // })

    // db.collection('users').find({age: 50}).count((error,count)=>{
    //     console.log(count);
    // })

    // db.collection('tasks').findOne({_id: new ObjectId("62cb306e97320ba70a7ac7ec")},(error,task) =>{
    //     if(error) {
    //         return console.log('unable to find task');
    //     }

    //     console.log(task);
    // })

    // db.collection('tasks').find({completed: true}).toArray((error,tasks)=>{
    //     if(error) {
    //         return console.log('no tasks found')
    //     }
    //     console.log(tasks);
    // })

    db.collection('tasks').deleteOne({
        description: 'finish css'
    }).then((result) => {
        console.log(result);
    }).catch((error) => {
        console.log(error);
    })

})