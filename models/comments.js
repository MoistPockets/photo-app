var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  likes: {
    type: Number,
    default: 0
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now(),
    required: true
  }
});

CommentSchema.methods.like = function(comment){
  this.likes+=1;
  this.save(comment);
};

CommentSchema.methods.dislike = function(comment){
  this.likes-=1;
  this.save(comment);
};

module.exports = mongoose.model('Comment', CommentSchema);
