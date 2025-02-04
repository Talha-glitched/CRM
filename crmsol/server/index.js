// index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const authRoutes= require('./routes/auth');
// Middlewares
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the CRM API!');
});
app.use('/api/auth', authRoutes);

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB Atlas');
  // Start server only after DB connection is successful
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch((error) => console.error('MongoDB connection error:', error));
