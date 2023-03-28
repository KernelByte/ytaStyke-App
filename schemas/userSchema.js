const Joi = require('joi');

const id_user = Joi.number().integer();
const number_id = Joi.number().integer();
const name_user = Joi.string();
const email = Joi.string().email();
const password_user = Joi.string().min(7);
const id_role_user = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password_user: password_user.required(),
  id_role_user: id_role_user.required()
});

const updateUserSchema = Joi.object({
  email: email,
  id_role_user: id_role_user,
});

const getUserSchema = Joi.object({
  id_user: id_user.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
