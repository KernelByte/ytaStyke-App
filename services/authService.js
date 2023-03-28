const bcrypt = require('bcrypt');
const UserService = require('./../services/userService');
const service = new UserService();
const jwt = require("jsonwebtoken");
const { config } = require("./../config/config");

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

      const payload = {
        sub: user.id_user,
        role: user.id_role_user
      };
      const token = jwt.sign(payload, config.jwtSecret);

      delete user.dataValues.password_user;
      res.send({
        data: user,
        token: token
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
