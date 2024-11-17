// src/pages/TrainBooking.jsx
import React, { useState } from 'react';

function TrainBooking() {
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        date: '',
        passengers: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking data:', formData);
        // Handle booking submission logic (e.g., saving data to an API or database)
    };

    return (
        <div>
            <h1>Book Train Tickets</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Departure:</label>
                    <input
                        type="text"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Destination:</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Passengers:</label>
                    <input
                        type="number"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default TrainBooking;
