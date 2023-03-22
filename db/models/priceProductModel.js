const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const PRICE_PRODUCTS_TABLE = 'price_products';

// Definimos el esquema de la base de datos
const PriceProductSchema = {
  id_price_product: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  id_group_price_product: {
    type: DataTypes.INTEGER,
  },

  name_product: {
    type: DataTypes.STRING,
  },

  price_unit: {
    type: DataTypes.INTEGER,
  },

  price_minimum: {
    type: DataTypes.INTEGER,
  },

  price_sending: {
    type: DataTypes.INTEGER,
  },
};

class PriceProduct extends Model {
  //Metodo para declarar todas las relaciones
  static associate() {
    //associate
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRICE_PRODUCTS_TABLE,
      modelName: 'PriceProduct',
      timestamps: false,
    };
  }
}

module.exports = { PRICE_PRODUCTS_TABLE, PriceProductSchema, PriceProduct };
