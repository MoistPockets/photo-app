var User = require('../models/users');
var Post = require('../models/posts');
var Comment = require('../models/comments');
var mongoose = require('mongoose');

exports.comment = function(req, res){
  var post = User.findById(req.params.post_id);
  var comment =  new Comment({
    body: req.body.body,
    post: post._id,
    created_by: req.params.created_by
    //TODO: Configure created_by after added passport USER object in request param
  });
  comment.save(function(err){
    var msg = (err) ? (err) : ('Comment saved! \n' + post);
    console.log(msg);
    res.json(msg);
  });
};

exports.delete = function(req, res) {
  Comment.remove({_id: req.body._id}, function(err){
    if(err)
      res.send(err);
    res.json({message: 'Comment ' + req.body._id +  'has been removed'});

  });
};

// exports.deleteBeer = function(req, res) {
//   // Use the Beer model to find a specific beer and remove it
//   Beer.remove({ userId: req.user._id, _id: req.params.beer_id }, function(err) {
//     if (err)
//       res.send(err);
//
//     res.json({ message: 'Beer removed from the locker!' });
//   });
// };
