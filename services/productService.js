class productService {
  constructor() {
    this.products = [];
    this.generate();
  }

  // Create a product
  create(pro) {
    this.products.push(pro);
  }

  // Find all products
  async find() {
    return this.products;
  }

  // Find one product
  async findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  // Update a product
  async update(id, changes) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      const pro = this.products[index];
      this.products[index] = {
        ...pro,
        ...changes,
      };
      return { message: true };
    }
  }

  // Delete a product
  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);
    if (index === -1) {
      throw new Error('product not found');
    } else {
      this.products.splice(index, 1);
      return { message: true };
    }
  }

  generate() {
    this.products.push(
      {
        id: '10',
        name: 'yoniher',
        age: 18,
      },
      {
        id: '20',
        name: 'Oscar',
        age: 19,
      },
      {
        id: '30',
        name: 'Luis',
        age: 20,
      }
    );
  }
}

module.exports = productService;
