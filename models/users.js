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
  phone: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  //Optional Profile Information
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  posts: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }],
    created_at: {
      type: Date,
      default: Date.now()
    }
    //TODO: Add groups.
    //TODO: Test out required messaged {required: 'Username required'}
});

UserSchema.methods.follow = function(user){
  this.following.push(user[0]._id);
  console.log('Succesfully followed ' + user[0].username);
};


module.exports = mongoose.model('User', UserSchema);
