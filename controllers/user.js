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

exports.getUser = function(req, res) {
  var query = (req.params.username) ? {
    username: req.params.username
  } : {};
  User.find(query, function(err, data) {
    if (err)
      res.json(err);
      console.log(err);
    res.json(data);
    console.log(data);
  });
};
//
// exports.follow = function(req, res){
//   User.find({username: req.params.username}, function(err, data){
//     if(err)
//       res.json(err);
//     User.follow(data, function(){
//       console.log('It worked');
//     });
//   });
//
// };
//TODO: Add deleting
//TODO: Handle Authentication
//TODO: Handle Following Users
