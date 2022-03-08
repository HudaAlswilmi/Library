const mongoose = require("mongoose")


const bookSchema = new mongoose.Schema({
    title:{type:String, required: true},
    pages:{type:Number, required: true},
    price:{type:Number, required: true},
    image:{type:String, required: true},
    
})


  module.exports = mongoose.model("Book", bookSchema)

