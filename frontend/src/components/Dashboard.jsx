import React from 'react';
import Navbar from './Navbar';
import { Container, Typography, Button, Box, Grid, Card, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
const Dashboard = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'auto' }}>
            <Navbar />

            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url(https://via.placeholder.com/1500)', // Replace with your image URL
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    color: 'white',
                    minHeight: '60vh', // Ensure a minimum height for the Hero Section
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    overflow: 'hidden', // Prevent overflow from affecting the layout
                }}
            >
                <Container>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        Welcome to Your Ticket Booking Hub
                    </Typography>
                    <Typography variant="h5" sx={{ marginBottom: 3 }}>
                        Book your tickets for trains, flights, hotels, and cabs all in one place.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        href="#explore" // Link to explore section or another page
                    >
                        Start Booking Now
                    </Button>
                </Container>
            </Box>

            {/* Services Section */}
            <Container sx={{ marginTop: 5 }}>
                <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                    Our Services
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                    {/* Train Service */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                    Train Booking
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                    Book your train tickets effortlessly for all major routes.
                                </Typography>
                                <Link to="/train-booking">
                                    <Button variant="contained" color="primary">
                                        Book Train
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Flight Service */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                    Flight Booking
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                    Find and book flights for your next travel destination.
                                </Typography>
                                <Link to="/flight-booking">
                                    <Button variant="contained" color="primary">
                                        Book Flight
                                    </Button>
                                </Link>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Hotel Service */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                    Hotel Booking
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                    Book the best hotels at your travel destination.
                                </Typography>
                                <Link to="/hotel-booking">
                                    <Button variant="contained" color="primary">
                                        Book Hotel
                                    </Button>
                                </Link>

                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Cab Service */}
                    <Grid item xs={12} sm={6} md={3}>
                        <Card>
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                                    Cab Booking
                                </Typography>
                                <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                    Get a cab for your journey with ease and comfort.
                                </Typography>
                                <Link to="/cab-booking">
                                    <Button variant="contained" color="primary">
                                        Book Cab
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Text Content Below */}
            <br />
            {/* Text Content Below */}
            <br />

            {/* Footer Section */}
            <Box
                sx={{
                    backgroundColor: '#333',
                    color: 'white',
                    padding: '20px 0',
                    textAlign: 'center',
                    marginTop: 'auto',
                }}
            >
                <Typography variant="body1">&copy; 2024 Your Ticket Booking Hub. All rights reserved.</Typography>
                <Typography variant="body2">Follow us on social media: Facebook | Twitter | Instagram</Typography>
            </Box>
        </div>
    );
};

export default Dashboard;
