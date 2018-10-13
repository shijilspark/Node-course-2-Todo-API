var mongoose = require('mongoose')

var userschema = new mongoose.Schema({
  email: {
    type:String,
    required:true,
    trim:true,
    minlength:1
  }
});

var User = mongoose.model('User', userschema);

module.exports = {User}
