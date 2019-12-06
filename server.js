var http = require('http');
var express = require('express');
var app = express();
var server = http.Server(app);
const CURRENT_WORKING_DIR = process.cwd()
var path = require('path');
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))


var mongo = require('mongodb')
var mongoose = require('mongoose')
var db, uri = "mongodb+srv://yaminkhan017:@Yamin287232@cluster0-95fpq.mongodb.net/orbittech?retryWrites=true&w=majority"
mongoose.connect(uri, 
      {useNewUrlParser:true, useUnifiedTopology: true })
      mongoose.connection.on('connected', function(){
            console.log("connected")
      });
  mongoose.connection.on('error', function(err){
      console.log('Could not connect to MongoDB')
  })

app.use('/public', express.static(path.join(CURRENT_WORKING_DIR, 'public')))

// app.get('/',function(request,response){
//       response.sendFile(__dirname + '/views/index.html')
// })
app.get('/add',function(request,response){
      response.sendFile(__dirname + '/views/addnew.html')
})
app.get('/cart',function(request,response){
      response.sendFile(__dirname + '/views/cart.html')
})
app.get('/single',function(request,response){
      response.sendFile(__dirname + '/views/singleview.html')
})

app.get('/login',function(request,response){
      response.sendFile(__dirname + '/views/login.html')
})

app.get('/new_user_register',function(request,response){
      response.sendFile(__dirname + '/views/register.html')
})

app.get('/',function(request,response){
      response.sendFile(__dirname + '/views/login.html')
})




app.post('/submit',function(request,response){
      // response.sendFile(__dirname + '/views/singleview.html')
})

require('./routes/product.routes')(app)
require('./routes/user.routes')(app)

server.listen(3000,'localhost',function(){
      console.log('server running ...')
})
