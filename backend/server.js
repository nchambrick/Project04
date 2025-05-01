// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');
const forumRoutes = require('./routes/forumRoutes');
const bcrypt = require('bcrypt');
bcrypt.hash('admin123', 10, (err, hash) => console.log(hash));


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/forum', forumRoutes);

app.get('/', (req, res) => {
  res.send('Fitness Forum API is running!');
});

app.listen(3001, () => {
  console.log('✅ Backend server running on http://localhost:3001');
});
