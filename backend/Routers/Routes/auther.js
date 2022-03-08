const express = require("express");
const {newAuther, getAuthers} = require('../Controllers/authers')


const autherRouter = express.Router();


autherRouter.post('/add', newAuther)
autherRouter.get('/', getAuthers)


module.exports = autherRouter;
