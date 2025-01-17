// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const safariRoutes = require('./routes/safariRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log('DB_URI:', process.env.DB_URI); // Debugging

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database Connection
mongoose.connect('mongodb+srv://mrisaackatana:Iyez8cyhuBFFXCaf@zuruafricasafaris.w0zr6.mongodb.net/?retryWrites=true&w=majority&appName=ZuruAfricaSafaris', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Failed to connect to the database:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/safaris', safariRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
