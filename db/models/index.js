const {Product, ProductSchema} = require("./productModel");
const {Buy, BuySchema} = require("./buyModel");
const {Group, GroupSchema} = require("./groupModel");
const {PriceProduct, PriceProductSchema} = require("./priceProductModel");
const {Role, RoleSchema} = require("./roleModel");
const {Statu, StatuSchema} = require("./statuModel");
const {User, UserSchema} = require("./userModel");

function setupModels(sequelize){
  User.init(UserSchema,User.config(sequelize));
  Role.init(RoleSchema,Role.config(sequelize));
  Product.init(ProductSchema,Product.config(sequelize));
  Buy.init(BuySchema,Buy.config(sequelize));
  Group.init(GroupSchema,Group.config(sequelize));
  PriceProduct.init(PriceProductSchema,PriceProduct.config(sequelize));
  Statu.init(StatuSchema,Statu.config(sequelize));


  // Asociaciones
  Role.associate(sequelize.models);
  User.associate(sequelize.models);
  Buy.associate(sequelize.models);
  Group.associate(sequelize.models);
  Statu.associate(sequelize.models);
  Product.associate(sequelize.models);

};

module.exports = setupModels;
