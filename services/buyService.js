// Conexion directa a sequelize
const { models } = require('../libs/sequelize');

class buyService {
  constructor() {}

  // Create a buy
  async create(buy) {
    const queryNewBuy = await models.Buy.create(buy);
    return { message: 'Compra Creada' };
  }

    // Find all buys
    async find() {
      const queryAll = await models.Buy.findAll();
      return queryAll;
    }

    // Find one buy
    async findOne(id) {
      const findBuy = await models.Buy.findByPk(id);
      if (!findBuy) {
        throw new Error('buy not found');
      } else {
        return findBuy;
      }
    }

    // Update a buy
    async update(id, changes) {
      // Busqueda del rol a actualizar
      const findBuy = await this.findOne(id);
      await findBuy.update(changes);
    }

    // Delete a buy
    async delete(id) {
      // Find a buy to update
      const findBuy = await this.findOne(id);
      await findBuy.destroy();
      return { message: true };
    }
}

module.exports = buyService;
