var User = require('../models/users');
var Post = require('../models/posts');
var Comment = require('../models/comments');
var mongoose = require('mongoose');

exports.save = function(req, res) {
  var post = new Post({
    body: req.body.body,
    created_by: req.body.created_by
      //images: (req.body.images) ? req.body.images : ''
      //TODO: Replace create_by with current user in JWT object.
  });
  post.save(function(err) {
    var msg = (err) ? (err) : ('Post saved! \n' + post);
    console.log(msg);
    res.json(msg);
  });

};

exports.get = function(req, res) {
  var query = (req.params.post_id) ? {
    _id: req.params.post_id
  } : {};
  Post.find(query)
    .populate('comments')
    .exec(function(err, data) {
      if (err)
        res.json(err);
      console.log(err);
      res.json(data);
      console.log(data);
    });
};
exports.delete = function(req, res) {
  findByIdAndRemove(req.body.post_id);
};
