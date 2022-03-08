const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

//  Middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());


// imported the db file
require("./models/index");






//  PORT
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});