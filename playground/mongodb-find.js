// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');
  // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bb05f84867148f96d5ea1ec'),
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // db.collection('Todos').find().count().then((count)=> {
  //   console.log(`Todos count: ${count}`);
  //
  db.collection('Users').find({'name': 'Shijil'}).toArray().then((docs)=>{
    // console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));

  // }, (err)=> {
  //   console.log('Unnable to fetch data', err);
   });

  // db.close();
});
