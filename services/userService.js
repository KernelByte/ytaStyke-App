// Conexion directa a sequelize
const { models } = require('../libs/sequelize');

class userService {
  constructor() {}

  // Create a user
  async create(user) {
    const queryNewUser = await models.User.create(user);
    return { message: 'Usuario Creado' };
  }

    // Find all users
    async find() {
      const queryAll = await models.User.findAll();
      return queryAll;
    }

    // Find one user
    async findOne(id) {
      const findUser = await models.User.findByPk(id);
      if (!findUser) {
        throw new Error('product not found');
      } else {
        return findUser;
      }
    }

    // Update a user
    async update(id, changes) {
      // Busqueda del rol a actualizar
      const findUser = await this.findOne(id);
      await findUser.update(changes);
    }

    // Delete a user
    async delete(id) {
      // Find a user to update
      const findUser = await this.findOne(id);
      await findUser.destroy();
      return { message: true };
    }
}

module.exports = userService;
