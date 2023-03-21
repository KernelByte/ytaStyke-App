const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const BUYS_TABLE = 'buys';

// Definimos el esquema de la base de datos
const BuySchema = {
  id_buy: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  id_group_buy :{
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  price_buy :{
    type: DataTypes.INTEGER,
  },

  buy_date :{
    type: DataTypes.DATE,
  },

  name_user: {
    type: DataTypes.STRING,
  },

  id_payment_status:{
    type: DataTypes.INTEGER,
  },

  id_user_buy:{
    type: DataTypes.INTEGER,
  },
};

class Buy extends Model {
  //Metodo para declarar todas las relaciones
  static associate() {
    //associate
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: BUYS_TABLE,
      modelName: 'Buy',
      timestamps: false,
    };
  }
}

module.exports = { BUYS_TABLE, buySchema, Buy };
