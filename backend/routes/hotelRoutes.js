const express = require('express');
const Hotel = require('../models/Hotel');
const router = express.Router();

// Route to search hotels
router.get('/search', async (req, res) => {
    try {
        const { location, checkInDate, checkOutDate } = req.query;
        const hotels = await Hotel.find({
            location: location,
            availableRooms: { $gt: 0 }, // Only show hotels with available rooms
        });
        res.json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Route to book a hotel
router.post('/book', async (req, res) => {
    try {
        const { hotelId, userId, rooms } = req.body;
        const hotel = await Hotel.findById(hotelId);
        if (hotel && hotel.availableRooms >= rooms) {
            hotel.availableRooms -= rooms;
            await hotel.save();
            res.json({ message: 'Booking successful!' });
        } else {
            res.status(400).json({ message: 'Not enough available rooms' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
