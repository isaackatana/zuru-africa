// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const pagesRoute = require('./routes/pages')
const PORT = 5000;

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to database'))
.catch(()=> console.log('Failed to connect to database'));

app.use('/', pagesRoute);

app.use('/api/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`))
