const express = require('express');
const Flight = require('../models/Flight');
const router = express.Router();

// Route to search flights
router.get('/search', async (req, res) => {
    try {
        const { source, destination, departureTime } = req.query;
        const flights = await Flight.find({
            source: source,
            destination: destination,
            departureTime: { $gte: new Date(departureTime) }
        });
        res.json(flights);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to book a flight
router.post('/book', async (req, res) => {
    try {
        const { flightId, userId, seats } = req.body;
        const flight = await Flight.findById(flightId);
        if (flight && flight.availableSeats >= seats) {
            flight.availableSeats -= seats;
            await flight.save();
            res.json({ message: 'Booking successful!' });
        } else {
            res.status(400).json({ message: 'Not enough available seats' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
