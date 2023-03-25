const { Model, DataTypes, Sequelize } = require('sequelize');
const { GROUPS_TABLE } = require('./groupModel');

// Definimos la tabla
const PRODUCTS_TABLE = 'products';

// Definimos el esquema de la base de datos
const ProductSchema = {
  id_product: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  date_product: {
    allowNull: false,
    type: DataTypes.STRING,
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
    references: {
      model: GROUPS_TABLE,
      key: 'id_group',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  id_status_product: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class Product extends Model {
  //Metodo para declarar todas las relaciones
  static associate() {
    this.hasMany(models.Group, {
      as: 'group',
      foreignKey: 'id_group_product',
    });
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCTS_TABLE, ProductSchema, Product };
