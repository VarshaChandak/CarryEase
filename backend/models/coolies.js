// models/Coolie.js

const mongoose = require('mongoose');

const coolieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  status: { type: String, enum: ['Available', 'Busy'], default: 'Available' },
});

const Coolie = mongoose.model('Coolie', coolieSchema);

module.exports = Coolie;
