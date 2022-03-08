const bookModel = require("../../models/Book");

// const getBooks = (req , res) => {
//     bookModel
//     .find()
//     .then
// }

const newBook = async (req, res) => {
  const { title, pages, price, image } = req.body;
  const Book = new bookModel({
    pages,
    price,
    image,
    title,
  });

  Book
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



module.exports = {
    newBook
  };


