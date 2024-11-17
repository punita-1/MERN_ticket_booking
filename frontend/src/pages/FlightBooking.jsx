import React, { useState } from 'react';
import './FlightBooking.css'

function FlightBooking() {
    const [formData, setFormData] = useState({
        departure: '',
        destination: '',
        date: '',
        passengers: 1,
        flightClass: 'economy', // Default flight class
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
        console.log('Flight booking data:', formData);
        // Here you can add logic to submit the booking (e.g., to an API or a backend server)
    };

    return (
        <div>
            <h1>Book Flight Tickets</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Departure Airport:</label>
                    <input
                        type="text"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        required
                        placeholder="Enter departure airport"
                    />
                </div>
                <div>
                    <label>Destination Airport:</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        required
                        placeholder="Enter destination airport"
                    />
                </div>
                <div>
                    <label>Date of Travel:</label>
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
                <div>
                    <label>Flight Class:</label>
                    <select
                        name="flightClass"
                        value={formData.flightClass}
                        onChange={handleChange}
                    >
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default FlightBooking;
