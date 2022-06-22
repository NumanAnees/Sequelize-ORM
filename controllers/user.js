const { User } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};

exports.newUser = async (req, res) => {
  const { name, email, password, gender } = req.body;
  try {
    const newUser = new User({ name, email, gender, password });
    const savedUser = await newUser.save().catch((err) => {
      console.log("Error: ", err);
      res.status(500).json({ error: "Cannot register user at the moment!" });
    });

    if (savedUser) res.json({ message: "Thanks for registering" });
  } catch (err) {
    console.log(err);
  }
};
