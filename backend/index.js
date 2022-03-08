const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express()
//  Middlewares
app.use(express.json({ limit: "30mb", extended: true }));
app.use(cors());



// imported the db file
require("./models/index");


// book router

app.use("/books", require("./Routers/Routes/book"));
app.use("/authers", require("./Routers/Routes/auther"));








//  PORT
const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});