const { User } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteById = async (req, res) => {
  const { id } = req.body;
  try {
    const delUser = await User.destroy({
      where: {
        id,
      },
    });

    if (delUser) res.status(200).json("Deleted Successfully");
  } catch (err) {
    console.log(err);
  }
};

exports.allDeletedUsers = async (req, res) => {
  try {
    const allUsers = await User.findAll({ paranoid: false });
    res.status(200).json({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};
