module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "GroupUser",
      [
        {
          EmployeeId: 1,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          EmployeeId: 1,
          groupId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          EmployeeId: 2,
          groupId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("GroupUser", null, {});
  },
};
