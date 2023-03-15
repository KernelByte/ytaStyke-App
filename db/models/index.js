const {Product, ProductSchema} = require("./productModel");
//const {Product, ProductSchema} = require("./productModel"); -- Otro modelo

function setupModels(sequelize){
  Product.init(ProductSchema,Product.config(sequelize));
  //Product.init(ProductSchema,Product.config(sequelize)); -- Otro modelo
};

module.exports = setupModels;
