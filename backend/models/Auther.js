const mongoose = require("mongoose")
const Joi = require("joi")

const authorSchema = new mongoose.Schema({
    name:String,
    age:Number,
    nationality:String,
    image:String,
    gender:String,
    books:[{
    type: mongoose.Types.ObjectId,
    ref: "Book",
    }]
    
})

const authorAddJoi = Joi.object({
    name: Joi.string().min(1).max(200).required(),
    age: Joi.number().min(5).max(1000),
    nationality: Joi.string().min(100).required(),
    image: Joi.string().uri().min(5).max(1000).required(),
    gender: Joi.string().min(10),

  })

  const Author = mongoose.model("Author", authorSchema)

module.exports.Author = Author
module.exports.authorAddJoi = authorAddJoi