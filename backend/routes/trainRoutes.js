const express = require('express');
const Train = require('../models/Train');
const router = express.Router();

// Route to search trains
router.get('/search', async (req, res) => {
    try {
        const { source, destination, departureTime } = req.query;
        const trains = await Train.find({
            source: source,
            destination: destination,
            departureTime: { $gte: new Date(departureTime) }
        });
        res.json(trains);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to book a train
router.post('/book', async (req, res) => {
    try {
        const { trainId, userId, seats } = req.body;
        const train = await Train.findById(trainId);
        if (train && train.availableSeats >= seats) {
            train.availableSeats -= seats;
            await train.save();
            res.json({ message: 'Booking successful!' });
        } else {
            res.status(400).json({ message: 'Not enough available seats' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
