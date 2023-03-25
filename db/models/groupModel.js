const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const GROUPS_TABLE = 'groups';

// Definimos el esquema de la base de datos
const GroupSchema = {
  id_group: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  description: {
    type: DataTypes.STRING,
  },
};

class Group extends Model {
  //Metodo para declarar todas las relaciones
  static associate(models) {
    this.belongsTo(models.Buy, {
      as: 'buy',
    });

    this.belongsTo(models.Product, {
      as: 'product',
    });

    this.belongsTo(models.PriceProduct, {
      as: 'priceProduct',
    });
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: GROUPS_TABLE,
      modelName: 'Group',
      timestamps: false,
    };
  }
}

module.exports = { GROUPS_TABLE, GroupSchema, Group };
