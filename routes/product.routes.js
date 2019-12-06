module.exports = function(app){
    var ProductController = require('./../controllers/product.controller')
    //var UserController = require('./../controllers/user.controller')
    
    //  app.get('/new', ProductController.form)
    app.post('/new_product', ProductController.new)
    //app.post('/new_user', UserController.newuser)
    app.get('/home', ProductController.home)
    app.get('/products', ProductController.list)
    
}