// backend/models/Safari.js
const mongoose = require('mongoose');

const SafariSchema = new mongoose.Schema({
  name: { type: String, required: true },
  thumbnail: { type: String, required: true },
  duration: { type: String, required: true },
});

module.exports = mongoose.model('Safari', SafariSchema);
