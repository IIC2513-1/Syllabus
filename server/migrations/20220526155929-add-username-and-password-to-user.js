"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "username", Sequelize.STRING);
    await queryInterface.addColumn("Users", "password", Sequelize.STRING);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "username");
    await queryInterface.removeColumn("Users", "password");
  },
};
