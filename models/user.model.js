var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema(
    {
       name: {
           type: String,
           required: "Title is required"
       },
       password: {
           type: String,
           required: "Content is required"
       },
       email: {
        type: Number,
        required: "Content is required"
    },
        admin: {
        type: Boolean,
        default: false
    },  
        
    }
)

var User = mongoose.model('User', UserSchema)

module.exports = User