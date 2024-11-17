import React, { useState } from 'react';
import './HotelBooking.css'

function HotelBooking() {
    const [formData, setFormData] = useState({
        hotelName: '',
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
        roomType: 'single', // Default room type
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
        console.log('Hotel booking data:', formData);
        // Here you can add logic to submit the booking (e.g., to an API or a backend server)
    };

    return (
        <div>
            <h1>Book Hotel Rooms</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Hotel Name:</label>
                    <input
                        type="text"
                        name="hotelName"
                        value={formData.hotelName}
                        onChange={handleChange}
                        required
                        placeholder="Enter hotel name"
                    />
                </div>
                <div>
                    <label>Check-in Date:</label>
                    <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Check-out Date:</label>
                    <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Guests:</label>
                    <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <div>
                    <label>Room Type:</label>
                    <select
                        name="roomType"
                        value={formData.roomType}
                        onChange={handleChange}
                    >
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="suite">Suite</option>
                    </select>
                </div>
                <button type="submit">Book Now</button>
            </form>
        </div>
    );
}

export default HotelBooking;
