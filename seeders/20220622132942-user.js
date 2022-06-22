module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Numan",
          lastName: "Anees",
          email: "numan@demo.com",
          password: "$321!pass!123$",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "Farhan",
          lastName: "Anees",
          email: "numan@demo.com",
          password: "$321!pass!123$",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
