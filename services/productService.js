// Conexion directa a sequelize
const { models } = require('../libs/sequelize');

class productService {
  constructor() {}

  // Create a product
  async create(pro) {
    const queryNewProduct = await models.Product.create(pro);
    return { message: 'Producto Creado' };
  }

  // Find all products
  async find() {
    const queryAll = await models.Product.findAll();
    return queryAll;
  }

  // Find one product
  async findOne(id) {
    const findProduct = await models.Product.findByPk(id);
    if (!findProduct) {
      throw new Error('product not found');
    } else {
      return findProduct;
    }
  }

  // Update a product
  async update(id, changes) {
    // Busqueda del producto a actualizar
    const findProduct = await this.findOne(id);
    await findProduct.update(changes);
  }

  // Delete a product
  async delete(id) {
    // Busqueda del producto a actualizar
    const findProduct = await this.findOne(id);
    await findProduct.destroy();
    return { message: true };
  }
}

module.exports = productService;
