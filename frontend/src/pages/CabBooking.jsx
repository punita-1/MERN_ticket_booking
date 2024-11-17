import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To fetch cab details using cabId
import { Link } from 'react-router-dom';
import './CabBooking.css'

function CabBooking() {
    const { cabId } = useParams(); // Getting cabId from URL parameters
    const [cabDetails, setCabDetails] = useState(null); // Cab details fetched from backend
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropoffLocation: '',
        cabType: 'Standard', // Default value
        bookingDate: '',
    });

    // Fetch cab details from the backend using cabId (you can use this to fetch details like available cab types)
    useEffect(() => {
        // Replace with your actual backend API
        fetch(`/api/cabs/${cabId}`)
            .then((response) => response.json())
            .then((data) => {
                setCabDetails(data);
            })
            .catch((error) => console.error('Error fetching cab details:', error));
    }, [cabId]);

    // Handle form input changes
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
        console.log('Cab booking data:', formData);
        // You can replace this with actual API call to submit the booking data
    };

    if (!cabDetails) {
        return <div>Loading cab details...</div>; // Show loading while cab details are being fetched
    }

    return (
        <div>
            <h1>Book Your Cab: {cabDetails.name}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Pickup Location:</label>
                    <input
                        type="text"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Drop-off Location:</label>
                    <input
                        type="text"
                        name="dropoffLocation"
                        value={formData.dropoffLocation}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Cab Type:</label>
                    <select
                        name="cabType"
                        value={formData.cabType}
                        onChange={handleChange}
                        required
                    >
                        <option value="Standard">Standard</option>
                        <option value="Luxury">Luxury</option>
                        <option value="SUV">SUV</option>
                    </select>
                </div>
                <div>
                    <label>Booking Date:</label>
                    <input
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
            <div>
                <Link to="/cabs">Back to Cabs</Link>
            </div>
        </div>
    );
}

export default CabBooking;
