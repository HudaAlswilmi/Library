const mongoose = require("mongoose")
const Joi = require("joi")

const bookSchema = new mongoose.Schema({
    title:String,
    pages:Number,
    price:Number,
    image:String,
    
})

const bookAddJoi = Joi.object({
    title: Joi.string().min(1).max(200).required(),
    pages: Joi.number().min(1).max(1000).required(),
    price: Joi.number().min(5).max(1000),
    image: Joi.string().uri().min(5).max(1000).required(),

  })

  const Book = mongoose.model("Book", bookSchema)

module.exports.Book = Book
module.exports.bookAddJoi = bookAddJoi