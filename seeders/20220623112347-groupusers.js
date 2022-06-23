module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "GroupUsers",
      [
        {
          employeeId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          employeeId: 1,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          employeeId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("GroupUsers", null, {});
  },
};
