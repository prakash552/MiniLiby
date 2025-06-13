const express = require('express');
const verifyToken = require('../middleware/authMiddleware');

const router = express.Router();

// Protected Cart Route
router.get('/cart', verifyToken, (req, res) => {
  res.json({ message: `Welcome to your cart, user: ${req.user.id}` });
});

module.exports = router;
