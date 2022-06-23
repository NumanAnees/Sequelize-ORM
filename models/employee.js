"use strict";
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define(
    "Employee",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );

  Employee.associate = function (models) {
    Employee.belongsToMany(models.Group, {
      through: models.GroupUser,
      as: "groups",
      foreignKey: "employeeId",
    });
  };

  return Employee;
};
