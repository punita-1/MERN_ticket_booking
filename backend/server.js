const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/auth');  // Import the auth routes

dotenv.config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Use the routes
app.use('/api/auth', authRoutes);  // Add this line to use the authentication routes
const trainRoutes = require('./routes/trainRoutes');
const flightRoutes = require('./routes/flightRoutes');
const hotelRoutes = require('./routes/hotelRoutes');
const cabRoutes = require('./routes/cabRoutes');

// Use the routes
app.use('/api/trains', trainRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/hotels', hotelRoutes);
app.use('/api/cabs', cabRoutes);


// Start the server
app.listen(5000, '0.0.0.0', () => {
  console.log('Server is running on port 5000');
});
