// config.js
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'sql5.freesqldatabase.com',
  user: 'sql5776267',
  password: '9N1iViHD6F',
  database: 'fitness_forum',
});

module.exports = pool;
