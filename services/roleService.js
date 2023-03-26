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

  // Find one role
  async findOne(id) {
    const findRole = await models.Role.findByPk(id);
    if (!findRole) {
      throw new Error('product not found');
    } else {
      return findRole;
    }
  }

  // Update a role
  async update(id, changes) {
    // Busqueda del rol a actualizar
    const findRole = await this.findOne(id);
    await findRole.update(changes);
  }

  // Delete a role
  async delete(id) {
    // Busqueda del producto a actualizar
    const findRole = await this.findOne(id);
    await findRole.destroy();
    return { message: true };
  }
}

module.exports = roleService;
