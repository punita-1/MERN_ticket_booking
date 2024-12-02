// CabBooking.jsx
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';

const CabBooking = () => {
    const [cabs, setCabs] = useState([]);
    const [loading, setLoading] = useState(true);

    // Simulating fetching cab data
    useEffect(() => {
        // In a real app, you would fetch this data from your API or MongoDB
        // Example:
        // fetch('your-api-endpoint')
        //   .then((response) => response.json())
        //   .then((data) => {
        //     setCabs(data);
        //     setLoading(false);
        //   });

        // Static cab data for demonstration
        const cabData = [
            { id: 1, type: 'Sedan', model: 'Toyota Camry', price: '$30 per ride', availability: 'Available Now' },
            { id: 2, type: 'SUV', model: 'Honda CR-V', price: '$40 per ride', availability: 'Available Now' },
            { id: 3, type: 'Luxury', model: 'Mercedes-Benz S-Class', price: '$100 per ride', availability: 'Available Now' },
            { id: 4, type: 'Minivan', model: 'Toyota Sienna', price: '$50 per ride', availability: 'Available Now' },
        ];

        setTimeout(() => {
            setCabs(cabData);
            setLoading(false);
        }, 1500); // Simulate delay for fetching data
    }, []);

    return (
        <>
            <Navbar />
            <Container sx={{ marginTop: 5 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Available Cabs for Booking
                </Typography>

                {loading ? (
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <Grid container spacing={3} justifyContent="center">
                        {cabs.map((cab) => (
                            <Grid item xs={12} sm={6} md={4} key={cab.id}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                            {cab.type} - {cab.model}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Price: {cab.price}
                                        </Typography>
                                        <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                            Availability: {cab.availability}
                                        </Typography>
                                        <Link to={`/book-now/${cab.id}`}>
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

export default CabBooking;
