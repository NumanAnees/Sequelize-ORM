module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Groups",
      [
        {
          name: "SE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CS",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "IT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "CSE",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Groups", null, {});
  },
};
