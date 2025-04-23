const mongoose = require('mongoose');
const plm  = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pinhub");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    
  },
  
  password: {
    type: String,

  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  dp: {
    type: String, // URL to display picture
    default: '',
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

userSchema.plugin(plm);
const User = mongoose.model('User', userSchema);

module.exports = User;
