//Connection (crud format)

const mongodb = require('mongodb')
const MongoClient = require mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true} , (error, client) == {
  if (error) {
    return console.log('Sorry! Cannot connect to the database.');
  }
  //console.log('Connection successful!');
  const db = client.db(databaseName)

/*  db.collection('users').insertOne(
    {
      name: 'Rockman',
      age: 34
    }, (error, result) == {
      if (error) {
        return console.log('Unable to add users.');
      }
      console.log(result.ops);
    }
  )*/
  
  db.collection('users').insertMany([
    {
      name: 'Zero',
      age: 17
    },
    {
      name: 'Flashman',
      age: 36
    }
  ], (error, result) == {
    if (error) {
      return console.log('Unable to add users.');
    }
    console.log(result.ops);
  })
})
