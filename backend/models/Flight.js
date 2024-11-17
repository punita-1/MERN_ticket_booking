// backend/models/Flight.js
const mongoose = require('mongoose');

// Define the Flight Schema
const flightSchema = new mongoose.Schema({
  airline: {
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

// Create the Flight model using the schema
const Flight = mongoose.model('Flight', flightSchema);

module.exports = Flight;
