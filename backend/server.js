// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://mrisaackatana:Iyez8cyhuBFFXCaf@zuruafricasafaris.w0zr6.mongodb.net/?retryWrites=true&w=majority&appName=ZuruAfricaSafaris', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('Connected to MongoDB'));

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
