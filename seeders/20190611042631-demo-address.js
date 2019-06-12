module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "AddressBooks",
      [
        {
          customerID: "Rinchem Flemingtion",
          country: "United States",
          address1: "55 River Road",
          address2: "",
          city: "Flemington",
          zipcode: 08822,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("AddressBooks", null, {});
  }
};
