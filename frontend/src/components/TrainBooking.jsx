// TrainBooking.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
const TrainBooking = () => {
    const [trains, setTrains] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating fetching train data from MongoDB
    useEffect(() => {
        // In a real app, you would fetch this data from MongoDB
        // Example:
        // fetch('your-api-endpoint')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setTrains(data);
        //     setLoading(false);
        //   });

        // Static train data for demonstration
        const trainData = [
            { id: 1, name: 'Express Train', route: 'City A to City B', time: '10:00 AM', price: '$50' },
            { id: 2, name: 'Rapid Train', route: 'City B to City C', time: '1:00 PM', price: '$40' },
            { id: 3, name: 'Superfast Train', route: 'City C to City D', time: '3:00 PM', price: '$60' },
            { id: 4, name: 'Holiday Express', route: 'City D to City E', time: '6:00 PM', price: '$70' },
        ];

        setTimeout(() => {
            setTrains(trainData);
            setLoading(false);
        }, 1500); // Simulate delay for fetching data
    }, []);

    return (
        <><Navbar /><Container sx={{ marginTop: 5 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                Available Trains for Booking
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={3} justifyContent="center">
                    {trains.map((train) => (
                        <Grid item xs={12} sm={6} md={4} key={train.id}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                        {train.name}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                        Route: {train.route}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                        Departure: {train.time}
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                        Price: {train.price}
                                    </Typography>
                                    <Link to={`/book-now/${train.id}`}>
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
        </Container></>
    );
};

export default TrainBooking;
