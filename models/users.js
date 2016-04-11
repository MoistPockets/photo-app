var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  //Required Profile Information
  name: {
    first: {
      type: String,
      required: true,
      trim: true
    },
    last: {
      type: String,
      required: true,
      trim: true
    }
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  avatar: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
  //Optional Profile Information
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }]
    //TODO: Add groups.

});



module.exports = mongoose.model('User', UserSchema);
