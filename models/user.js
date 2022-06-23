module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      Name: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Task, {
      foreignKey: "userId",
    });
    User.hasOne(models.Project, {
      foreignKey: "userId",
    });
  };
  return User;
};
