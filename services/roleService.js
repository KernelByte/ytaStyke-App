// Conexion directa a sequelize
const { models } = require('../libs/sequelize');

class roleService {
  constructor() {}

  // Create a role
  async create(rol) {
    const queryNewRole = await models.Role.create(rol);
    return { message: 'Rol Creado' };
  }

    // Find all roles
    async find() {
      const queryAll = await models.Role.findAll();
      return queryAll;
    }
}

module.exports = roleService;
