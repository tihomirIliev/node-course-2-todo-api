// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log("Unable to connect to MD server")
    }
    console.log("Connected to Mongo server", err);
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5cfe30de1f0344fabd04ffad")
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })
    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log(`Todos count: ${count}`)
    // }, (err) => {
    //     console.log('Unable to fetch todos', err)
    // })
    db.collection("User").find({
        name: 'Gosho Usera'
    }).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2))
    }, (err) => {
        console.log(err)
    })

    // client.close();
});
