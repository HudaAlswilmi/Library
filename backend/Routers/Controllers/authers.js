const autherModel = require("../../models/Auther");

const getAuthers = (req , res) => {
    autherModel
    .find()
    .then
}

const newAuther = async (req, res) => {
  const { name, age, nationality, image, gender } = req.body;
  const Auther = new autherModel({
    age,
    gender,
    image,
    nationality,
    name,
  });

  Auther
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};



module.exports = {
    newAuther
  };

