const { User, Task, Project } = require("../models");

exports.getAll = async (req, res) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ data: allUsers });
  } catch (err) {
    console.log(err);
  }
};
exports.getById = async (req, res) => {
  const { id } = req.body;
  try {
    const allData = await User.findAll({
      attributes: ["Name", "email", "password"],
      include: [
        {
          model: Task,
        },
      ],
      where: { id },
    });
    res.status(200).json({ data: allData });
  } catch (err) {
    console.log(err);
  }
};
exports.getOne = async (req, res) => {
  const { id } = req.body;
  try {
    const allData = await User.findOne({
      attributes: ["Name", "email", "password"],
      include: [
        {
          model: Project,
        },
      ],
      where: { id },
    });
    res.status(200).json({ data: allData });
  } catch (err) {
    console.log(err);
  }
};
