// backend/models/db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'localdb',
  password: 'admin',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
