// models/Train.js
const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    availableSeats: { type: Number, required: true },
    departureTime: { type: String, required: true },
    arrivalTime: { type: String, required: true },
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
