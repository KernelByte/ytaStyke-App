const { Pool } = require('pg');

const pool = new Pool({
  host: '',
  port: 5432,
  user: 'nameUSer',
  password: 'passwordUser',
  database: 'nameDatabase',
});

module.exports = pool;
