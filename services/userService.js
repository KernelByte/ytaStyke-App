// Conexion directa a sequelize
const { models } = require('../libs/sequelize');

class userService {
  constructor() {}

  // Create a user
  async create(user) {
    const queryNewUser = await models.User.create(user);
    return { message: 'Usuario Creado' };
  }
}

module.exports = userService;
