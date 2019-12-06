var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema(
    {
       name: {
           type: String,
           required: "Title is required"
       },
       price: {
           type: String,
           required: "Content is required"
       },
       quantity: {
        type: String,
        required: "Content is required"
    },
        description: {
            type: String,
            required: "Content is required"
        },
        image: {
            type: String,
            required: "Content is required"
        },
    }
)

var Product = mongoose.model('Product', ProductSchema)

module.exports = Product