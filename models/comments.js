var mongoose = require('mongoose');
var CommentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
    trim: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
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

module.exports = mongoose.model('Comment', CommentSchema);
