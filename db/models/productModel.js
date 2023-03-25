const { Model, DataTypes, Sequelize } = require('sequelize');
const { GROUPS_TABLE } = require('./groupModel');
const { STATUS_TABLE } = require('./statuModel');

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
    references: {
      model: STATUS_TABLE,
      key: 'id_status',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Product extends Model {
  //Metodo para declarar todas las relaciones
  static associate(models) {
    this.hasMany(models.Group, {
      as: 'group',
      foreignKey: 'id_group_product',
    });

    this.hasMany(models.Statu, {
      as: 'statu',
      foreignKey: 'id_status_product',
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
