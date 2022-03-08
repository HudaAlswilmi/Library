const express = require("express");
const {newBook, getBooks} = require('../Controllers/books')


const bookRouter = express.Router();


bookRouter.post('/add', newBook)
bookRouter.get('/', getBooks)


module.exports = bookRouter;
