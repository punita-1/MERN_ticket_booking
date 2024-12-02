// FlightBooking.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const FlightBooking = () => {
    const [flights, setFlights] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating fetching flight data from MongoDB
    useEffect(() => {
        // In a real app, you would fetch this data from MongoDB
        // Example:
        // fetch('your-api-endpoint')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setFlights(data);
        //     setLoading(false);
        //   });

        // Static flight data for demonstration
        const flightData = [
            { id: 1, name: 'Flight 101', route: 'New York to Los Angeles', time: '8:00 AM', price: '$200' },
            { id: 2, name: 'Flight 202', route: 'Los Angeles to San Francisco', time: '12:00 PM', price: '$150' },
            { id: 3, name: 'Flight 303', route: 'San Francisco to Chicago', time: '4:00 PM', price: '$250' },
            { id: 4, name: 'Flight 404', route: 'Chicago to Miami', time: '7:00 PM', price: '$300' },
        ];

        setTimeout(() => {
            setFlights(flightData);
            setLoading(false);
        }, 1500); // Simulate delay for fetching data
    }, []);

    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 5 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Available Flights for Booking
                </Typography>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} justifyContent="center">
                        {flights.map((flight) => (
                            <Grid item xs={12} sm={6} md={4} key={flight.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                            {flight.name}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Route: {flight.route}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Departure: {flight.time}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Price: {flight.price}
                                        </Typography>
                                        <Link to={`/book-now/${flight.id}`}>
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

export default FlightBooking;
