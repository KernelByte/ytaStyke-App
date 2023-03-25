'use strict';

const { BuySchema, BUYS_TABLE } = require('./../models/buyModel');
const { GroupSchema, GROUPS_TABLE } = require('./../models/groupModel');
const { PriceProductSchema, PRICE_PRODUCTS_TABLE } = require('./../models/priceProductModel');
const { ProductSchema, PRODUCTS_TABLE } = require('./../models/productModel');
const { RoleSchema, ROLES_TABLE } = require('./../models/roleModel');
const { StatuSchema, STATUS_TABLE } = require('./../models/statuModel');
const { UserSchema, USERS_TABLE } = require('./../models/userModel');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(GROUPS_TABLE, GroupSchema);
    await queryInterface.createTable(STATUS_TABLE, StatuSchema);
    await queryInterface.createTable(ROLES_TABLE, RoleSchema);
    await queryInterface.createTable(USERS_TABLE, UserSchema);
    await queryInterface.createTable(BUYS_TABLE, BuySchema);
    await queryInterface.createTable(PRICE_PRODUCTS_TABLE, PriceProductSchema);
    await queryInterface.createTable(PRODUCTS_TABLE, ProductSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ROLES_TABLE);
    await queryInterface.dropTable(USERS_TABLE);
    await queryInterface.dropTable(BUYS_TABLE);
    await queryInterface.dropTable(GROUPS_TABLE);
    await queryInterface.dropTable(PRICE_PRODUCTS_TABLE);
    await queryInterface.dropTable(PRODUCTS_TABLE);
    await queryInterface.dropTable(STATUS_TABLE);

  },
};
