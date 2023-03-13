const { Pool } = require('pg');
const { config } = require('./../config/config');

// Proteccion de variables
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPassword);
// Url de conexion
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbDataBase}`;
// Pasamos la url de conexion completa
const pool = new Pool({ connectionString: URI });

module.exports = pool;
