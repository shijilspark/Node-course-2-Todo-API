// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require ('mongodb');
// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if (err){
    return console.log('Unable to connect to MongoDB server');

  }
  console.log('Connected to MongoDB server');
  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // })

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result)=>{
  //   console.log(result);
  // })
  //

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({
  //   _id: new ObjectID('5bb074bf867148f96d5ea41b'),
  // }).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bb0a68e867148f96d5ea822')
  // },{
  //     $set:{
  //       completed: false
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result)=>{
  //     console.log(result)
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bb0551131028b4a89f494ae')},
    { $set:{ name: 'Shaju4' } },
    { $inc: { 'age': 10 } },
    { returnOriginal: true }).then((result)=>{
      console.log(result)
    });


  // db.close();
});
