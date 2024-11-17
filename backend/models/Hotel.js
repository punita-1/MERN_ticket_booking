// backend/models/Hotel.js
const mongoose = require('mongoose');

// Define the Hotel Schema
const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  availableRooms: {
    type: Number,
    required: true,
  },
  pricePerNight: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

// Create the Hotel model using the schema
const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
