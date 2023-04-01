const bcrypt = require('bcrypt');
const UserService = require('./../services/userService');
const service = new UserService();
const { tokenGenerate, tokenVerify } = require('../utils/auth/generateToken');
const { config } = require('../config/config');

const loginService = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await service.findByEmail(email);

    if (!user) {
      res.status(404);
      res.send({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(password, user.password_user);

    if (checkPassword) {
      const tokenSession = await tokenGenerate(user);

      delete user.dataValues.password_user;
      delete user.dataValues.recovery_token;
      res.send({
        data: user,
      });
      return;
    }

    if (!checkPassword) {
      res.status(409);
      res.send({
        error: 'Invalid password',
      });
      return;
    }
  } catch (error) {
    return { error };
  }
};

const changePassword = async (req, res) => {
  try {
    const { token, newPassword } = req.body;

    const tokenSession = await tokenVerify(token, config.jwtSecret_recovery);

    if (tokenSession != null) {
      const user = await service.findOne(tokenSession.sub);

      if (user.recovery_token !== token) {
        throw res.send({
          error: 'unauthorized',
        });
      } else {
        const hash = await bcrypt.hash(newPassword, 10);
        await service.update(user.id_user, {
          recovery_token: null,
          password_user: hash,
        });
        res.status(200);
        res.send({
          OK: 'Contraseña actualizada',
        });
      }
    } else {
      res.status(400);
      res.send({
        error: 'unauthorized',
      });
    }
  } catch (error) {
    res.status(409);
    res.send({
      error: 'Invalid password',
    });
  }
};

module.exports = { loginService, changePassword };
