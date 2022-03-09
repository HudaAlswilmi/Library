const bookModel = require("../../models/Book");

const getBooks = (req, res) => {
  bookModel
    .find()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const newBook = async (req, res) => {
  const { title, pages, price, image } = req.body;
  const Book = new bookModel({
    pages,
    price,
    image,
    title,
  });

  Book.save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const updateBooks = (req, res) => {
  const { title, pages, price, image, _id } = req.body;
  bookModel
    .findByIdAndUpdate(
      { _id },
      { $set: { pages, price, image, title } },
      { new: true }
    )
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const deleteBooks = (req, res) => {
  const { _id } = req.body;
  bookModel
    .findByIdAndDelete({ _id })
    .then(() => {
      res.status(200).json({ massege: "deleted successfully" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  newBook,
  getBooks,
  updateBooks,
  deleteBooks,
};
