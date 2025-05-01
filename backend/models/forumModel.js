// models/forumModel.js
const pool = require('../config');

exports.getCategories = async () => {
  return [
    'Strength Training',
    'Cardio Workouts',
    'Yoga and Flexibility',
    'Nutrition and Diet',
    'Injury Recovery'
  ];
};

exports.getQuestionsByCategory = async (category) => {
  const [rows] = await pool.query('SELECT * FROM questions WHERE category = ?', [category]);
  return rows;
};

exports.addQuestion = async (userId, category, questionText) => {
  await pool.query('INSERT INTO questions (user_id, category, question_text) VALUES (?, ?, ?)', [userId, category, questionText]);
};
