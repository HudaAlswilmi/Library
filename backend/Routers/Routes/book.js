const express = require("express");
const {newBook, getBooks, updateBooks, deleteBooks} = require('../Controllers/books')


const bookRouter = express.Router();


bookRouter.post('/add', newBook)
bookRouter.get('/', getBooks)
bookRouter.put('/update', updateBooks)
bookRouter.delete('/delete', deleteBooks)


module.exports = bookRouter;
