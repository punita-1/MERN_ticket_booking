// import React from 'react';

// const Dashboard = () => {
//     return (
//         <div>
//             <h1>Welcome to the Dashboard</h1>
//         </div>
//     );
// };

// export default Dashboard;

// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import { getTrains, getFlights, getHotels, getCabs } from '../api';
import { Button, Card, CardContent, Typography } from '@mui/material'; 

const Dashboard = () => {
    const [trains, setTrains] = useState([]);
    const [flights, setFlights] = useState([]);
    const [hotels, setHotels] = useState([]);
    const [cabs, setCabs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const trainData = await getTrains('New York', 'Washington DC', '2024-12-01T08:00:00Z');
                const flightData = await getFlights('New York', 'Los Angeles', '2024-12-01T10:00:00Z');
                const hotelData = await getHotels('Miami');
                const cabData = await getCabs('New York', 'Sedan');
                
                setTrains(trainData);
                setFlights(flightData);
                setHotels(hotelData);
                setCabs(cabData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data for dashboard:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleBooking = (type, id) => {
        // Handle the booking process for each service type (train, flight, hotel, cab)
        console.log(`Booking ${type} with ID: ${id}`);
    };

    if (loading) {
        return <Typography variant="h5">Loading...</Typography>;
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            
            {/* Train Section */}
            <Typography variant="h6" gutterBottom>Trains</Typography>
            {trains.length > 0 ? (
                <div>
                    {trains.map((train) => (
                        <Card key={train._id} sx={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6">{train.name}</Typography>
                                <Typography variant="body2">From: {train.source} to {train.destination}</Typography>
                                <Typography variant="body2">Departure: {new Date(train.departureTime).toLocaleString()}</Typography>
                                <Typography variant="body2">Price: ${train.price}</Typography>
                                <Typography variant="body2">Available Seats: {train.availableSeats}</Typography>
                                <Button onClick={() => handleBooking('Train', train._id)} variant="contained" color="primary">Book Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Typography>No trains available</Typography>
            )}

            {/* Flight Section */}
            <Typography variant="h6" gutterBottom>Flights</Typography>
            {flights.length > 0 ? (
                <div>
                    {flights.map((flight) => (
                        <Card key={flight._id} sx={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6">{flight.airline}</Typography>
                                <Typography variant="body2">From: {flight.source} to {flight.destination}</Typography>
                                <Typography variant="body2">Departure: {new Date(flight.departureTime).toLocaleString()}</Typography>
                                <Typography variant="body2">Price: ${flight.price}</Typography>
                                <Typography variant="body2">Available Seats: {flight.availableSeats}</Typography>
                                <Button onClick={() => handleBooking('Flight', flight._id)} variant="contained" color="primary">Book Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Typography>No flights available</Typography>
            )}

            {/* Hotel Section */}
            <Typography variant="h6" gutterBottom>Hotels</Typography>
            {hotels.length > 0 ? (
                <div>
                    {hotels.map((hotel) => (
                        <Card key={hotel._id} sx={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6">{hotel.name}</Typography>
                                <Typography variant="body2">Location: {hotel.location}</Typography>
                                <Typography variant="body2">Price Per Night: ${hotel.pricePerNight}</Typography>
                                <Typography variant="body2">Available Rooms: {hotel.availableRooms}</Typography>
                                <Button onClick={() => handleBooking('Hotel', hotel._id)} variant="contained" color="primary">Book Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Typography>No hotels available</Typography>
            )}

            {/* Cab Section */}
            <Typography variant="h6" gutterBottom>Cabs</Typography>
            {cabs.length > 0 ? (
                <div>
                    {cabs.map((cab) => (
                        <Card key={cab._id} sx={{ marginBottom: '16px' }}>
                            <CardContent>
                                <Typography variant="h6">{cab.cabType}</Typography>
                                <Typography variant="body2">Location: {cab.location}</Typography>
                                <Typography variant="body2">Price Per Ride: ${cab.pricePerRide}</Typography>
                                <Button onClick={() => handleBooking('Cab', cab._id)} variant="contained" color="primary">Book Now</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Typography>No cabs available</Typography>
            )}
        </div>
    );
};

export default Dashboard;
