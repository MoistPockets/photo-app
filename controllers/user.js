var User = require('../models/users');
var Post = require('../models/posts');
var Comment = require('../models/comments');

exports.createUser = function(req, res){
  var user = new User();
  user.name.first = req.body.name.first;
  user.name.last = req.body.name.last;
  user.username = req.body.username;
  user.email = req.body.username;
  //TODO: Configure user avatar and image uploading
  user.phone = req.body.phone;

  user.save(function(err){
    if(err)
      console.log('There was an error saving the user ' + req.username + '\n' + err);
    else
      console.log('User ' + req.username + ' saved! \n' + user);
  });
};

exports.getUsers = function(req, res){
  User.find({}, function(err, data){
      if(err)
        console.log(err);
      res.json(data);
  });
};

exports.findUser = function(req, res){
  User.find({_id: req.body._id}, function(err, data){
    if(err)
      console.log(err);
    res.json(data);
  });
};
