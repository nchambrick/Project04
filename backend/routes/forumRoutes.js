// routes/forumRoutes.js
const express = require('express');
const router = express.Router();
const forumModel = require('../models/forumModel');

router.get('/categories', async (req, res) => {
  const categories = await forumModel.getCategories();
  res.json(categories);
});

router.get('/questions/:category', async (req, res) => {
  const { category } = req.params;
  const questions = await forumModel.getQuestionsByCategory(category);
  res.json(questions);
});

router.post('/questions', async (req, res) => {
  const { userId, category, questionText } = req.body;
  await forumModel.addQuestion(userId, category, questionText);
  res.json({ message: 'Question added successfully' });
});

module.exports = router;
