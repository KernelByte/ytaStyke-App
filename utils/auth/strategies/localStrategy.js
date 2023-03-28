const { Strategy } = require('passport-local');
const bcrypt = require('bcrypt');
const userServcice = require('./../../../services/userService');
const service = new userServcice();

const LocalStrategy = new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  async (email, password, done) => {
    try {
      const user = await service.findByEmail(email);
      if (!user) {
        done({ message: 'Usuario no encontrado' }, false);
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        done({ message: 'Contraseña incorrecta' }, false);
      }
      delete user.dataValues.password;
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  }
);

module.exports = LocalStrategy;
