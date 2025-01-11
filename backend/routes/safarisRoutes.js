// backend/routes/safariRoutes.js
const express = require('express');
const router = express.Router();
const Safari = require('../models/Safari');

// GET /api/safaris
router.get('/', async (req, res) => {
  try {
    const safaris = await Safari.find();
    res.json(safaris);
  } catch (err) {
    console.error('Error fetching safaris:', err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
