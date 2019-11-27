var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');



app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))

app.get('/',function(request,response){
      response.sendFile(__dirname + '/views/index.html')
})
app.get('/add',function(request,response){
      response.sendFile(__dirname + '/views/addnew.html')
})
app.get('/cart',function(request,response){
      response.sendFile(__dirname + '/views/cart.html')
})




server.listen(3000,'localhost',function(){
      console.log('server running ...')
})
