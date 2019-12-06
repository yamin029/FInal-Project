
module.exports = function(app){

      var UserController = require('./../controllers/user.controller')
      
      app.post('/new_user', UserController.newuser)
      app.post('/user_login', UserController.userlogin)
      app.get('/home', UserController.index)
      
     
      
  }