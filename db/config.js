const { config } = require('./../config/config');

// Proteccion de variables
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPassword);
// Url de conexion
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbDataBase}`;

module.exports = {
  // Conexion a desarrollo
  development: {
    url: URI,
    dial: 'postgres',
  },
  // Conexion a produccion
  production: {
    url: URI,
    dial: 'postgres',
  },
};
