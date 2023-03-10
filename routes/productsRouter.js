// Nos traemos a express
const express = require('express');
const router = express.Router();
// Import services
const productService = require('./../services/productService');

// listar products
const service = new productService();
router.get('/', async (request, response) => {
  const products = await service.find();
  response.json(products);
});

// Consultar un product
router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const product = await service.findOne(id);
  if (id === '999') {
    response.status(404).json({
      message: 'Not Found',
    });
  } else {
    response.status(200).json(product);
  }
});

//Crear un nuevo producto
router.post('/', async (request, response) => {
  const bodyResponse = request.body;
  response.status(201).json(await service.create(bodyResponse));
});

//Actualizar un dato del producto
router.patch('/:id', async (request, response) => {
  try {
    // se recibe id
    const { id } = request.params;
    const bodyResponse = request.body;
    // llamado al metodo
    const productUpdate = await service.update(id, bodyResponse);
    response.json(productUpdate);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
});

//Eliminar un producto
router.delete('/:id', async (request, response) => {
  // se recibe id
  const { id } = request.params;
  const bodyResponse = request.body;
  // llamado al metodo
  const productDelete = await service.delete(id);
  response.json(productDelete);
});

module.exports = router;
