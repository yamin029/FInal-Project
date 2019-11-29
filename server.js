var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');
const io = require('socket.io')(3000)

const users = {}

io.on('connection', socket => {
  socket.on('new-user', name => {
    users[socket.id] = name
    socket.broadcast.emit('user-connected', name)
  })
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message: message, name: users[socket.id] })
  })
  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]
  })
})

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
