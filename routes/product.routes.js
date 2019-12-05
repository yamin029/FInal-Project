module.exports = function(app){
    var ProductController = require('./../controllers/product.controller')
    var ProductController = require('./../controllers/user.controller')
    
     app.get('/new', ProductController.form)
    app.post('/new_product', ProductController.new)
    app.post('/new_user', ProductController.newuser)
    app.get('/', ProductController.home)
    app.get('/products', ProductController.list)
    
}