const { Model, DataTypes, Sequelize } = require('sequelize');
const { ROLES_TABLE } = require('./roleModel');

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
    references: {
      model: ROLES_TABLE,
      key: 'id_role',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class User extends Model {
  //Metodo para declarar todas las relaciones
  static associate(models) {
    this.belongsTo(models.Role, {
      as: 'role',
    });
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'User',
      timestamps: false,
    };
  }
}

module.exports = { USERS_TABLE, UserSchema, User };
