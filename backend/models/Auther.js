const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: { type: String, required: true },
  age: { type: Number },
  image: { type: String, required: true },
  gender: { type: String },
  books:[{type:mongoose.Schema.Types.ObjectId, ref: "Books"}]
})



module.exports = mongoose.model("Author", authorSchema)


