const { Strategy } = require("passport-local");
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const userServcice = require('./../../../services/userService');
const service = new userServcice();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    const isMatch = await bcrypt.compare(password, user.password_user);
    if (!isMatch) {
      done(boom.unauthorized("Contraseña incorrecta"), false);
    }
    delete user.dataValues.password_user;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}
);


module.exports = LocalStrategy;
