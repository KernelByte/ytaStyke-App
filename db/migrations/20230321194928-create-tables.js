'use strict';

const {ProductSchema, PRODUCTS_TABLE } = require("./../models/productModel");
//const {ProductSchema, PRODUCTS_TABLE } = require("./../models/productModel"); Se agregan mas modelos

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(PRODUCTS_TABLE,ProductSchema);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.drop(PRODUCTS_TABLE);
  }
};
