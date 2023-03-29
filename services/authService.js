const bcrypt = require('bcrypt');
const UserService = require('./../services/userService');
const service = new UserService();
const { tokenGenerate } = require('../utils/auth/generateToken');

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
      res.send({
        data: user,
        token: tokenSession,
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

module.exports = { loginService };
