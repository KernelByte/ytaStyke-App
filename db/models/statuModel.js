const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const STATUS_TABLE = 'status';

// Definimos el esquema de la base de datos
const StatuSchema = {
  id_status: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  group_status: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Statu extends Model {
  //Metodo para declarar todas las relaciones
  static associate() {
    this.belongsTo(models.Buy, {
      as: 'buy',
    });

    this.belongsTo(models.Product, {
      as: 'product',
    });
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: STATUS_TABLE,
      modelName: 'Statu',
      timestamps: false,
    };
  }
}

module.exports = { STATUS_TABLE, StatuSchema, Statu };
