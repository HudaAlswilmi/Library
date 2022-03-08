const express = require("express");
const {
  newAuther,
  getAuthers,
  updateAuther,
  deleteAuther,
} = require("../Controllers/authers");

const autherRouter = express.Router();

autherRouter.post("/add", newAuther);
autherRouter.get("/", getAuthers);
autherRouter.put("/update", updateAuther);
autherRouter.delete("/delete", deleteAuther);

module.exports = autherRouter;
