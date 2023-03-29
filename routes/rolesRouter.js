// Se trae el modulo de express
const express = require('express');
// Importamos la libreria de passport para validar token
const passport = require('passport');
const router = express.Router();
// Import service role
const roleService = require('./../services/roleService');
// instanciar un nuevo servicio del roleService
const service = new roleService();
const { checkAuth, checkRoleAuth } = require('../middlewares/authHandler');

//create a role
router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (request, response) => {
    const bodyResponse = request.body;
    response.status(201).json(await service.create(bodyResponse));
  }
);

// list roles
router.get('/', checkAuth, checkRoleAuth(['1']), async (request, response) => {
  const roles = await service.find();
  response.json(roles);
});

// Find a rol
router.get('/:id', async (request, response) => {
  const { id } = request.params;
  const role = await service.findOne(id);
  if (id === '999') {
    response.status(404).json({
      message: 'Not Found',
    });
  } else {
    response.status(200).json(role);
  }
});

//Update data a role
router.patch('/:id', async (request, response, next) => {
  try {
    // se recibe id
    const { id } = request.params;
    const bodyResponse = request.body;
    // llamado al metodo
    const roleUpdate = await service.update(id, bodyResponse);
    response.json(roleUpdate);
  } catch (error) {
    //response.status(404).json({ message: error.message });
    next(error);
  }
});

//Delete role
router.delete('/:id', async (request, response) => {
  // se recibe id
  const { id } = request.params;
  const bodyResponse = request.body;
  // llamado al metodo
  const roleDelete = await service.delete(id);
  response.json(roleDelete);
});

module.exports = router;
