var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
       name: {
           type: String,
           required: "Name is required"
       },
       password: {
           type: String,
           required: "Password is required"
       },
       email: {
        type: String,
        required: "Email is required"
    },
        admin: {
        type: Boolean,
        default: false
    },  
        
    }
)

var User = mongoose.model('User', UserSchema)

module.exports = User