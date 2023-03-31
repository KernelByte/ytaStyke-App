'use strict';

/** @type {import('sequelize-cli').Migration} */
const { UserSchema, USERS_TABLE } = require('./../models/userModel');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USERS_TABLE, "recovery_token", {
      allowNull: true,
      type: Sequelize.DataTypes.STRING,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USERS_TABLE, "recovery_token");
  }
};
