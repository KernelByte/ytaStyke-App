const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const PRODUCT_TABLE = 'products';
// Definimos el esquema de la base de datos
const productSchema = {
  id_product: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  date_product: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  name_product: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  price_unit: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  price_total: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  id_group_product: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  id_status_product: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Product extends Model {
  //Metodo para declarar todas las relaciones
  static associations() {
    //associate
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCT_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCT_TABLE, productSchema, Product };
