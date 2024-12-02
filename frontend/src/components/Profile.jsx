import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, CircularProgress, Card, CardContent } from '@mui/material';
import { useParams } from 'react-router-dom';  // For fetching user ID from URL (if needed)
import axios from 'axios';  // Assuming you're using Axios for API calls
import Navbar from './Navbar';

const Profile = () => {
    const [userData, setUserData] = useState(null);  // State for user data
    const [loading, setLoading] = useState(true);  // State to track loading status
    const [error, setError] = useState(null);  // For error handling

    // If you are using userId from the URL, you can get it with useParams
    const { userId } = useParams();

    useEffect(() => {
        // Fetch user data from API
        const fetchUserData = async () => {
            try {
                // Replace this with your API endpoint for fetching user data
                const response = await axios.get(`https://your-api-endpoint/users/${userId}`);
                setUserData(response.data);  // Set user data to state
                setLoading(false);  // Set loading to false after data is fetched
            } catch (err) {
                setError('Error fetching user data');
                setLoading(false);
            }
        };

        fetchUserData();  // Call the function to fetch data
    }, [userId]);  // Re-run the effect when userId changes

    if (loading) {
        return (<><Navbar /><Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <CircularProgress />
        </Box></>
        );
    }

    if (error) {
        return (
            <><Navbar /><Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Box></>
        );
    }

    return (
        <><Navbar /><Container sx={{ marginTop: 5 }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: 4 }}>
                User Profile
            </Typography>

            <Card sx={{ maxWidth: 600, margin: '0 auto' }}>
                <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                        {userData.name}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        <strong>Email:</strong> {userData.email}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        <strong>Phone:</strong> {userData.phone}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>
                        <strong>Booked Tickets:</strong> {userData.bookedTickets.length}
                    </Typography>

                    {/* Show more user data if available */}
                    {userData.bookedTickets.length > 0 && (
                        <Box sx={{ marginTop: 3 }}>
                            <Typography variant="h6">Booked Tickets:</Typography>
                            <ul>
                                {userData.bookedTickets.map((ticket, index) => (
                                    <li key={index}>
                                        <Typography variant="body2">
                                            {ticket.trainName || ticket.flightName || ticket.hotelName} - {ticket.date}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        </Box>
                    )}
                </CardContent>
            </Card>
        </Container></>
    );
};

export default Profile;
