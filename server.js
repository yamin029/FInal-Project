var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
var io = require('socket.io')(server);
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

io.on('connection', function(socket){
      socket.on('chat message', function(msg){
        io.emit('chat message', msg);
      });
    });

io.on('disconnection',()=>{
      socket.broadcast.emit('user-disconnected'); 
    });

server.listen(3000,'localhost',function(){
      console.log('server running ...')
})
