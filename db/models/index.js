const {Product, ProductSchema} = require("./productModel");
const {Buy, buySchema} = require("./buyModel");
const {Group, GroupSchema} = require("./groupModel");
const {PriceProduct, PriceProductSchema} = require("./priceProductModel");
const {Role, RoleSchema} = require("./roleModel");
const {Statu, StatuSchema} = require("./statuModel");
const {User, UserSchema} = require("./userModel");

function setupModels(sequelize){
  Product.init(ProductSchema,Product.config(sequelize));
  Buy.init(buySchema,Buy.config(sequelize));
  Group.init(GroupSchema,Group.config(sequelize));
  PriceProduct.init(PriceProductSchema,PriceProduct.config(sequelize));
  Role.init(RoleSchema,Role.config(sequelize));
  Statu.init(StatuSchema,Statu.config(sequelize));
  User.init(UserSchema,User.config(sequelize));
};

module.exports = setupModels;
