// Se trae el modulo de express
const express = require('express');
const router = express.Router();
// Import service role
const roleService = require('./../services/roleService');

// instanciar un nuevo servicio del roleService
const service = new roleService();

//create a role
router.post('/', async (request, response) => {
  const bodyResponse = request.body;
  response.status(201).json(await service.create(bodyResponse));
});

// listar roles
router.get('/', async (request, response) => {
  const roles = await service.find();
  response.json(roles);
});

module.exports = router;
