// server/routes/contactRoutes.js
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("Contact Message Received:", req.body);
  res.status(200).json({ message: 'Thanks for contacting us!' });
});

module.exports = router;
