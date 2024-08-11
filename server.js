const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User'); // Make sure to create a User model
const app = express();
const port = 5173;

// MongoDB connection
const DATABASE_URL = "mongodb+srv://abhishek:abhi@123@entertainment-app.xoq6byy.mongodb.net/Entertainment-app?retryWrites=true&w=majority&appName=entertainment-app";
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected to database'));

// Middleware
app.use(express.json());

// Sign up endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).send('Sign up successful');
  } catch (error) {
    res.status(500).send('Sign up failed');
  }
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`));
