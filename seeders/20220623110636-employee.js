module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Employees",
      [
        {
          email: "numan@gmail.com",
          firstName: "Numan",
          lastName: "Anees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "numan@gmail.com",
          firstName: "Farhan",
          lastName: "Anees",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "numan@gmail.com",
          firstName: "Ikram",
          lastName: "Anwar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Employees", null, {});
  },
};
