const express = require('express');
const Cab = require('../models/Cab');
const router = express.Router();

// Route to search cabs
router.get('/search', async (req, res) => {
    try {
        const { location, cabType } = req.query;
        const cabs = await Cab.find({
            location: location,
            cabType: cabType,
        });
        res.json(cabs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to book a cab
router.post('/book', async (req, res) => {
    try {
        const { cabId, userId } = req.body;
        const cab = await Cab.findById(cabId);
        if (cab) {
            res.json({ message: 'Cab booked successfully!' });
        } else {
            res.status(400).json({ message: 'Cab not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
