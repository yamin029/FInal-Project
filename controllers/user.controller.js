var User = require('./../models/user.model')

module.exports.newuser = function(request, response){
      //save(request.body)
      console.log(request.body)
      let user = new User(request.body)
      user.save(function(err, data){
          if(err){
              // console.log(err)
              return response.status(400).json({msg: "All fields are required"})
          }
          return response.status(200).json({product:data})
      })
     //User.push(request.body)
     //console.log(Products)

    //  User.find(function(err, data){
    //     if(err){
    //         // console.log(err)
    //         return response.status(400).json({msg: "something went wrong"})
    //     }
    //     return response.status(200).json({user:data})
    // })



  }

  module.exports.userlogin = function(request, response){
    
     User.find(function(err, data){
      if(err){
          // console.log(err)
          return response.status(400).json({msg: "something went wrong"})
      }
      return response.status(200).json({user:data})
  })



}
  