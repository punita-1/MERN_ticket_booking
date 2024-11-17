// backend/models/Train.js
const mongoose = require('mongoose');

// Define the Train Schema
const trainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  departureTime: {
    type: Date,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Create the Train model using the schema
const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
