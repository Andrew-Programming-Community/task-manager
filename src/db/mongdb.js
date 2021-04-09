const mongodb = require('mongodb')
const ObjectID = mongodb.ObjectID;

const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://172.104.104.67:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

console.log(id.id.length)
console.log(id.toHexString().length)
console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'Andrew',
        age: 18
    })

    // db.collection('tasks').insertMany([
    //     {
    //         _id:id,
    //         descritpion: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         descritpion: 'Renew inspection',
    //         completed: false
    //     },
    //     {
    //         descritpion: 'Reading book',
    //         completed: false
    //     },
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops)
    // })

    /*    db.collection('tasks').findOne({descritpion: 'Clean the house'}, (error, task) => {
            console.log(task)
        })

        db.collection('tasks').find({descritpion: 'Clean the house'}).toArray((error, tasks) => {
            console.log(tasks)
        })


        db.collection('tasks').findOne({_id: new ObjectID("604da437cf126f149b1203c1")}, (error, task) => {
            console.log(task)
        })*/

    /*    db.collection('tasks').updateOne({
            _id: new ObjectID("604da437cf126f149b1203c1")
        }, {
            $rename: {
                'completed': 'finished'
            }
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })


        db.collection('tasks').updateMany({
           completed:false
        }, {
            $set: {
                completed: true
            }
        }).then((res) => {
            console.log(res.modifiedCount)
        }).catch((error) => {
            console.log(error)
        })*/

    /*
        db.collection('tasks').deleteOne({
            _id: new ObjectID("604da437cf126f149b1203c1")
        }).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    */

    //
    // db.collection('tasks').deleteMany({
    //     completed:true±
    // }).then((res) => {
    //     console.log(res)
    // }).catch((error) => {
    //     console.log(error)
    // })

})