const { User, Task, Project, Group, Employee } = require("../models");

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
//many to one
exports.getTasks = async (req, res) => {
  const { id } = req.body;
  try {
    const allData = await Task.findAll({
      include: [
        {
          model: User,
        },
      ],
      where: { userId: id },
    });
    res.status(200).json({ data: allData });
  } catch (err) {
    console.log(err);
  }
};
//many to many
exports.ManyToMany = async (req, res) => {
  try {
    const data = await Employee.findAll({
      include: [
        {
          model: Group,
          as: "groups",
          attributes: ["id", "name"],
        },
      ],
    });
    res.status(200).json({ data: data });
  } catch (err) {
    console.log(err);
  }
};
