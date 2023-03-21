const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const setupModels = require('./../db/models');

// Proteccion de variables
const USER = encodeURIComponent(config.dbUser);
const PASS = encodeURIComponent(config.dbPassword);
// Url de conexion
const URI = `postgres://${USER}:${PASS}@${config.dbHost}:${config.dbPort}/${config.dbDataBase}`;
// Pasamos la url de conexion completa
const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: true,
});

setupModels(sequelize);

//sequelize.sync(); Se cancela proceso de sincronizacion automatica de todo

module.exports = sequelize;
