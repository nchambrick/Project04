const pool = require('../config');
const bcrypt = require('bcrypt');

exports.registerUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  await pool.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword]);
};

exports.loginUser = async (username) => {
  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
  return rows[0]; // return the user object if exists
};
