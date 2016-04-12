var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
  body: {
    type: String,
    trim: true,
    required: true
  },
  images: [{
    type: String
  }],
  // likes: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User'
  // }],
  // comments: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Comment'
  // }],
  created_at: {
    type: Date,
    default: Date.now()
  },
  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

PostSchema.methods.upvote = function(post) {
  this.upvotes += 1;
  this.save(post);
};

PostSchema.methods.downvote = function (post) {
  this.upvotes -= 1;
  this.save(post);
};

module.exports = mongoose.model('Post', PostSchema);
