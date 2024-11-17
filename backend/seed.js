require('dotenv').config(); // Load environment variables

const mongoose = require('mongoose');
const Train = require('./models/Train');
const Flight = require('./models/Flight');
const Hotel = require('./models/Hotel');
const Cab = require('./models/Cab');

// Connect to MongoDB using the URI from environment variables
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');

    // Insert sample data for each service
    const trainData = [
        {
            name: 'Express 101',
            source: 'New York',
            destination: 'Washington DC',
            departureTime: new Date('2024-12-01T08:00:00Z'),
            availableSeats: 50,
            price: 120,
        },
        {
            name: 'Superfast 202',
            source: 'Boston',
            destination: 'Chicago',
            departureTime: new Date('2024-12-01T09:30:00Z'),
            availableSeats: 75,
            price: 150,
        },
    ];

    const flightData = [
        {
            airline: 'AirX',
            source: 'New York',
            destination: 'Los Angeles',
            departureTime: new Date('2024-12-01T10:00:00Z'),
            availableSeats: 150,
            price: 300,
        },
    ];

    const hotelData = [
        {
            name: 'Hotel Luxe',
            location: 'Miami',
            availableRooms: 30,
            pricePerNight: 200,
            rating: 4.5,
        },
    ];

    const cabData = [
        {
            cabType: 'Sedan',
            availableSeats: 4,
            pricePerRide: 20,
            location: 'New York',
        },
    ];

    // Insert the data into the collections
    Train.insertMany(trainData);
    Flight.insertMany(flightData);
    Hotel.insertMany(hotelData);
    Cab.insertMany(cabData);

    console.log('Sample data inserted successfully');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
