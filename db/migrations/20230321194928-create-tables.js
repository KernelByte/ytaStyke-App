'use strict';

const {ProductSchema, PRODUCT_TABLE } = require("./../models/productModel");
//const {ProductSchema, PRODUCT_TABLE } = require("./../models/productModel"); Se agregan mas modelos

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCT_TABLE,ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(PRODUCT_TABLE);
  }
};
