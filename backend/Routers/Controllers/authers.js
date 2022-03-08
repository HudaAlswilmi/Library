const autherModel = require("../../models/Auther");

const getAuthers = (req , res) => {
    autherModel
    .find()
    .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
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


const updateAuther = (req, res) => {
  const { _id, name, age, nationality, image, gender } = req.body;
  autherModel
    .findByIdAndUpdate(
      { _id },
      { $set: { name, age, nationality, image, gender } },
      { new: true }
    )
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};


const deleteAuther = (req, res) => {
  const { _id } = req.body;
  autherModel
    .findByIdAndDelete({ _id })
    .then(() => {
      res.status(200).json({ massege: "deleted successfully" });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
    newAuther,
    getAuthers,
    updateAuther,
    deleteAuther
  };

