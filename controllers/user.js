const { User } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const allUsers = await User.scope("name").findAll();
    res.status(200).json({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};
