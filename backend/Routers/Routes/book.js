const express = require("express");
const {newBook} = require('../Controllers/books')


const bookRouter = express.Router();


bookRouter.post('/add', newBook)


module.exports = bookRouter;
