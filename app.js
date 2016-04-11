//Requiring Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var morgan = require('morgan');

//Controllers
var userController = require('./controllers/user');
var postController= require('./controllers/post');
var commentController = require('./controllers/comment');

//Module Initialization and Setup
var app = express();
var port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('X-HTTP-Method-Override'));

app.listen(port, function(){
  console.log('Server is currently listening on port ' + port);
});
