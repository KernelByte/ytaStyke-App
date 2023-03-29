const { config } = require('./../config/config');
const { tokenVerify } = require('../utils/auth/generateToken');

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

async function checkAuth  (req, res, next)  {
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
};

module.exports = { checkApiKey, checkAuth };
