const { config } = require('./../config/config');
const { tokenVerify } = require('../utils/auth/generateToken');

// TODO: Nos traemos el serviceUser para el uso de su metodo
const UserService = require('./../services/userService');
const service = new UserService();

// Funcion para la validacion de la llave
function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];

  // Validacion de la llave recivida
  if (apiKey === config.apiKey) {
    next();
  } else {
    next(
      res.status(500).json({
        message: 'no esta autorizado',
      })
    );
  }
}

async function checkAuth(req, res, next) {
  try {
    // TODO: Se captura el token del bearer
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await tokenVerify(token);
    if (tokenData.sub) {
      next();
    } else {
      res.status(409);
      res.send({ error: 'No esta autorizado' });
    }
  } catch (e) {
    console.log(e);
    res.status(409);
    res.send({ error: 'No esta autorizado' });
  }
}

//async function checkRoleAuth(req, res, next) {
const checkRoleAuth = (roles) => async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ').pop();
    const tokenData = await tokenVerify(token);
    const userData = await service.findOne(tokenData.sub);

    if (roles == userData.id_role_user) {
      next();
    } else {
      res.status(409);
      res.send({ error: 'No tiene permisos para acceder' });
    }
  } catch (e) {
    console.log(e);
    res.status(409);
    res.send({ error: 'No puedes ingresar a esta ruta' });
  }
};

module.exports = { checkApiKey, checkAuth, checkRoleAuth };
