var User = require('../models/users');
var Post = require('../models/posts');
var Comment = require('../models/comments');
var mongoose = require('mongoose');

exports.createUser = function(req, res) {
  var user = new User({
    name: {
      first: req.body.first,
      last: req.body.last
    },
    username: req.body.username.toLowerCase(),
    email: req.body.email,
    avatar: req.body.avatar,
    phone: req.body.phone,

  });

  user.save(function(err) {
    var msg = (err) ? ('There was an error saving the user ' + user.username + '\n' + err) : ('User ' + user.username + ' saved! \n' + user);
    console.log(msg);
    res.json(msg);
  });
};
exports.getUsers = function(req, res){
  User.find(function(err, data){
    if(err)
      res.send(err);
    res.send(data);
  });
};

exports.getUser = function(req, res) {
  var user = User.findById(req.params.user_id);
  user.populate('posts', function(err, post) {
    res.json(post);
  });

};
//TODO: Add deleting
//TODO: Handle Authentication
//TODO: Handle Following Users
