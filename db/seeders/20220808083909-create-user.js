'use strict';

module.exports = {
  up: async function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [
      {
        id: '8d1c1593-06a3-4b86-9a2d-66a00b7fd3b1',
        login: 'Moskalenko',
        password: '1',
        age: 26,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
