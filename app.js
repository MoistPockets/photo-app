//Requiring Modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var methodOverride = require('method-override');
var morgan = require('morgan');

//Controllers and Configuration Files
var userController = require('./controllers/user');
var postController = require('./controllers/post');
var commentController = require('./controllers/comment');
var config = require('./config');
mongoose.connect(config.mongoose_uri);

//Module Initialization and Configuration
var app = express();
var router = express.Router();
var port = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(methodOverride('X-HTTP-Method-Override'));


//Routing
router.route('/users')
  .get(userController.getUsers)
  .post(userController.createUser);
router.route('/user/:user_id')
  .get(userController.getUser);
router.route('/post/:post_id?')
  .get(postController.get)
  .post(postController.save);
router.route('post/:post_id/comments')
  .post(commentController.comment);
// router.route('/user/follow/:username')
//   .get(userController.follow);
app.use('/api', router);
app.listen(port, function() {
  console.log('Server is currently listening on port ' + port);
});
