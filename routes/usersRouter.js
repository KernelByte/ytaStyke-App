// Nos traemos a express
const express = require('express');

// Import services
const userService = require('./../services/userService');
const router = express.Router();

// Se realiza instancia del servicio user
const service = new userService();

// Validaciones para el user
const validatorHandler = require('./../middlewares/validatorHandler');
const {
  updateUserSchema,
  createUserSchema,
  getUserSchema,
} = require('./../schemas/userSchema');

//create a user
router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const bodyResponse = req.body;
      const newUser = await service.create(bodyResponse);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
);

// list users
router.get('/', async (request, response) => {
  const users = await service.find();
  response.json(users);
});

// Find a user
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

//Update user
router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (request, response, next) => {
    try {
      // se recibe id
      const { id } = request.params;
      const bodyResponse = request.body;
      // llamado al metodo
      const userUpdate = await service.update(id, bodyResponse);
      response.json(userUpdate);
    } catch (error) {
      next(error);
    }
  }
);

//delete user
router.delete(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (request, response, next) => {
    try {
      // se recibe id
      const { id } = request.params;
      // llamado al metodo
      const userDelete = await service.delete(id);
      response.json(userDelete);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
