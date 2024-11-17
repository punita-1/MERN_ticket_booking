import React, { useState } from 'react';
import './BusBooking.css'

function BusBooking() {
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        date: '',
        passengers: 1,
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Booking data:', formData);
        // Here you would handle the booking logic, such as submitting data to a server or API
    };

    return (
        <div>
            <h1>Book Bus Tickets</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Departure:</label>
                    <input
                        type="text"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        required
                        placeholder="Enter departure city"
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
                        placeholder="Enter destination city"
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

export default BusBooking;
