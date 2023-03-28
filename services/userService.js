// Conexion directa a sequelize
const { models } = require('../libs/sequelize');
// Libreria de encriptacion
const bcrypt = require('bcrypt');
// Validacion de errores
const boom = require("@hapi/boom");

class userService {
  constructor() {}

  // Create a user
  async create(user) {
    const hash = await bcrypt.hash(user.password_user, 10);
    const queryNewUser = await models.User.create({
      ...user,
      password_user: hash,
    });
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
      throw boom.notFound('user not found');
    } else {
      return findUser;
    }
  }

    // Find one user to email
    async findByEmail(email) {
      const findUser = await models.User.findOne({
        where: { email }
      });
      if (!findUser) {
        throw boom.notFound('user not found');
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
