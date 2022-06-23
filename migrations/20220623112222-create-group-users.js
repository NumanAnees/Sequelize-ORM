"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("GroupUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Employees",
          key: "id",
          as: "employeeId",
        },
      },
      groupId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Groups",
          key: "id",
          as: "groupId",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("GroupUsers");
  },
};
