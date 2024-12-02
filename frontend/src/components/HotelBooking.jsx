// HotelBooking.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const HotelBooking = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating fetching hotel data from MongoDB
    useEffect(() => {
        // In a real app, you would fetch this data from MongoDB
        // Example:
        // fetch('your-api-endpoint')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setHotels(data);
        //     setLoading(false);
        //   });

        // Static hotel data for demonstration
        const hotelData = [
            { id: 1, name: 'Grand Plaza', location: 'New York', amenities: 'Pool, Gym, Free Wi-Fi', price: '$150 per night' },
            { id: 2, name: 'Sunset Resort', location: 'California', amenities: 'Spa, Beachfront, Restaurant', price: '$200 per night' },
            { id: 3, name: 'City Hotel', location: 'Chicago', amenities: 'Gym, Business Center, Parking', price: '$120 per night' },
            { id: 4, name: 'Mountain Inn', location: 'Colorado', amenities: 'Hiking, Fireplace, Skiing', price: '$180 per night' },
        ];

        setTimeout(() => {
            setHotels(hotelData);
            setLoading(false);
        }, 1500); // Simulate delay for fetching data
    }, []);

    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 5 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Available Hotels for Booking
                </Typography>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} justifyContent="center">
                        {hotels.map((hotel) => (
                            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                            {hotel.name}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Location: {hotel.location}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Amenities: {hotel.amenities}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Price: {hotel.price}
                                        </Typography>
                                        <Link to={`/book-now/${hotel.id}`}>
                                            <Button variant="contained" color="primary">
                                                Book Now
                                            </Button>
                                        </Link>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default HotelBooking;
