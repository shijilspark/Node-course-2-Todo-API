// mongoose variable assigned from the object returned from mongoose.js appendFile
var express = require('express');
var bodyParser = require('body-parser');


var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express ();

app.use(bodyParser.json());

app.post('/todos',(req, res) =>{
  var todo = new Todo ({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  })
});

app.get ('/todos',(req, res)=>{
  Todo.find().then((todos)=>{
    //sending object instead of array that is why we mentione (todos) and we use {todos}
    res.send({todos})
  },(e)=>{
    res.status(400).send(e)
  });
});

app.listen(3000, () =>{
  console.log('Started on port 3000')
});

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

//added validators
// var schema = new mongoose.Schema({
//   text: {type: String, required:true, minlength: 1, trim: true},
//   completed:{type:Boolean, default: false},
//   completedAt:{ type: Number,  default: null}
// });
//
// var Todo = mongoose.model('Todo', schema);
//
// //Todo is a constructor now
// // var newTodo = new Todo({
// //   text: 'Cook Dinner'
// // });
// //
// // newTodo.save().then((doc)=>{
// //   console.log('Todo item saved', doc)
// // }, (e)=>{
// //   console.log("Unable to save Todo")
// // });
//
// var otherTodo = new Todo ({
//   text:'  Validator second '
//
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) =>{
//   console.log('Unable to save')
//
// });
