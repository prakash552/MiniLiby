// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/contactRoutes');
const protectedRoutes = require('./routes/protectedRoutes');
// Add others as needed

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/protected', protectedRoutes);
// Example: Add more routes for books, cart, orders


// Add more APIs: books, cart, orders

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error(err));
