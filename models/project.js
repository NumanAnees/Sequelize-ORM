module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define(
    "Project",
    {
      title: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {}
  );
  Task.associate = function (models) {
    // associations can be defined here
    Task.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: "CASCADE",
    });
  };
  return Task;
};
