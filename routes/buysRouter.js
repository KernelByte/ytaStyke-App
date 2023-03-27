// Nos traemos a express
const express = require('express');
const router = express.Router();

// Import services
const buyService = require('./../services/buyService');

// Se realiza instancia del servicio buy
const service = new buyService();

//create a buy
router.post('/', async (request, response) => {
  const bodyResponse = request.body;
  response.status(201).json(await service.create(bodyResponse));
});

// list buys
router.get('/', async (request, response) => {
  const buys = await service.find();
  response.json(buys);
});

// Find a buy
router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const buy = await service.findOne(id);
  if (id === '999') {
    response.status(404).json({
      message: 'Not Found',
    });
  } else {
    response.status(200).json(buy);
  }
});

//Update buy
router.patch('/:id', async (request, response, next) => {
  try {
    // se recibe id
    const { id } = request.params;
    const bodyResponse = request.body;
    // llamado al metodo
    const buyUpdate = await service.update(id, bodyResponse);
    response.json(buyUpdate);
  } catch (error) {
    //response.status(404).json({ message: error.message });
    next(error);
  }
});

//delete buy
router.delete('/:id', async (request, response) => {
  // se recibe id
  const { id } = request.params;
  //const bodyResponse = request.body;
  // llamado al metodo
  const buyDelete = await service.delete(id);
  response.json(buyDelete);
});

module.exports = router;
