const { Pool } = require('pg');

const pool = new Pool({
  host: '',
  port: 5432,
  user: 'user_yta',
  password: 'Yta20394',
  database: 'db_ytaStyle',
});

module.exports = pool;
