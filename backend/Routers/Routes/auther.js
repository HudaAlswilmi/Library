const express = require("express");
const {newAuther} = require('../Controllers/authers')


const autherRouter = express.Router();


autherRouter.post('/add', newAuther)


module.exports = autherRouter;
