// backend/models/Cab.js
const mongoose = require('mongoose');

// Define the Cab Schema
const cabSchema = new mongoose.Schema({
  cabType: {
    type: String,
    required: true,
  },
  availableSeats: {
    type: Number,
    required: true,
  },
  pricePerRide: {
    type: Number,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// Create the Cab model using the schema
const Cab = mongoose.model('Cab', cabSchema);

module.exports = Cab;
