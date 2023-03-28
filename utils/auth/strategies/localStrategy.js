const { Strategy } = require('passport-local');
const userServcice = require('./../../../services/userService');
const service = new userServcice();
const bcrypt = require("bcrypt");

const localStrategy = new Strategy(async (email, password, done) => {
  try {
    const user = await service.findByEmail(email);
    if (!user) {
      done(res.status(500).json({ message: 'Usuario no encontrado' }), false);
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if (!isMatch) {
      done(res.status(500).json({ message: 'Contraseña incorrecta' }), false);
    }
    done(null,user);
  } catch (error) {
    done(error, false);
  }
});

module.exports = localStrategy;
