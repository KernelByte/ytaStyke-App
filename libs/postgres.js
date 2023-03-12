const { Client } = require('pg');

async function getConnection() {
  const connectionData = new Client({
    host: '',
    port: 5432,
    user: 'nameUSer',
    password: 'passwordUser',
    database: 'nameDatabase',
  });
  await connectionData.connect();
  return connectionData;
}

module.exports = getConnection;
