const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const USERS_TABLE = 'users';

// Definimos el esquema de la base de datos
const UserSchema = {
  id_user: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  number_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },

  name_user: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  password_user: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  id_role_user: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
};

class User extends Model {
  //Metodo para declarar todas las relaciones
  static associate() {
    //associate
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'user',
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, UserSchema, User };
