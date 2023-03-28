const bcrypt = require('bcrypt');
const UserService = require('./../services/userService');
const service = new UserService();

const loginService = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await service.findByEmail(email);

    if (!user) {
      res.status(404);
      res.send({ error: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(password, user.password_user);

    //TODO JWT
    //const tokenSession = await tokenSign(user) //TODO: 2d2d2d2d2d2d2

    if (checkPassword) {
      delete user.dataValues.password_user;
      res.send({
        data: user,
        //tokenSession
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
