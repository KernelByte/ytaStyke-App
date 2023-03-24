const { Model, DataTypes, Sequelize } = require('sequelize');

// Definimos la tabla
const ROLES_TABLE = 'roles';

// Definimos el esquema de la base de datos
const RoleSchema = {
  id_role: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Role extends Model {
  //Metodo para declarar todas las relaciones
  static associate(models) {
    this.hasMany(models.User, {
      as: 'users',
      foreignKey: 'id_role_user',
    });
  }

  //Metodo para configuracion
  static config(sequelize) {
    return {
      sequelize,
      tableName: ROLES_TABLE,
      modelName: 'Role',
      timestamps: false,
    };
  }
}

module.exports = { ROLES_TABLE, RoleSchema, Role };
