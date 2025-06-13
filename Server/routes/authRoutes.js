// server/routes/authRoutes.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');	

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // ✅ STEP 1: Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists!' });
    }

    // ✅ STEP 2: Hash password and create new user
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ name, email, phone, password: hashed });
    await user.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: 'Something went wrong during registration' });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '2h',
    });

    // Optional: hide password from response
    const { password: _, ...userData } = user._doc;

    res.json({ token, user: userData });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
