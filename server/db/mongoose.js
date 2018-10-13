var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});
// module.exports ={mongoose: mongoose} or we can write as a short form as mongoose variable
// and property are samename

module.exports = {mongoose};
