// Nos traemos a express
const express = require('express');
const router = express.Router();

// Import services
const userService = require('./../services/userService');

// Se realiza instancia del servicio user
const service = new userService();

// list users
router.get('/', async (request, response) => {
  const users = await service.find();
  response.json(users);
});

// Find un user
router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const user = await service.findOne(id);
  if (id === '999') {
    response.status(404).json({
      message: 'Not Found',
    });
  } else {
    response.status(200).json(user);
  }
});

//create one user
router.post('/', async (request, response) => {
  const bodyResponse = request.body;
  response.status(201).json(await service.create(bodyResponse));
});

//Update user
router.patch('/:id', async (request, response, next) => {
  try {
    // se recibe id
    const { id } = request.params;
    const bodyResponse = request.body;
    // llamado al metodo
    const userUpdate = await service.update(id, bodyResponse);
    response.json(userUpdate);
  } catch (error) {
    //response.status(404).json({ message: error.message });
    next(error);
  }
});

//delete user
router.delete('/:id', async (request, response) => {
  // se recibe id
  const { id } = request.params;
  const bodyResponse = request.body;
  // llamado al metodo
  const userDelete = await service.delete(id);
  response.json(userDelete);
});

module.exports = router;
