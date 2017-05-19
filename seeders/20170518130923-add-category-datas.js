'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Categories', [{
      category: "Sedan",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      category: "MPV",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      category: "Hatcback",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      category: "SUV",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      category: "Sport",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      category: "Hybrid",
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
