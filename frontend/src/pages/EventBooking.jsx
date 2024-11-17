import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To fetch the event details using eventId
import { Link } from 'react-router-dom';
import './EventBooking.css'

function EventBooking() {
    const { eventId } = useParams(); // Getting eventId from URL parameters
    const [eventDetails, setEventDetails] = useState(null); // Event details fetched from backend
    const [formData, setFormData] = useState({
        eventName: '',
        bookingDate: '',
        numberOfAttendees: 1,
    });

    // Fetch event details from the backend using eventId
    useEffect(() => {
        // You can replace this URL with your actual backend API to get event details by eventId
        fetch(`/api/events/${eventId}`)
            .then((response) => response.json())
            .then((data) => {
                setEventDetails(data);
                setFormData((prevData) => ({
                    ...prevData,
                    eventName: data.name, // Set the event name to be pre-filled in the form
                }));
            })
            .catch((error) => console.error('Error fetching event details:', error));
    }, [eventId]);

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
        console.log('Event booking data:', formData);
        // You can replace this with actual API call to submit the booking
    };

    if (!eventDetails) {
        return <div>Loading event details...</div>; // Show loading while event details are being fetched
    }

    return (
        <div>
            <h1>Book Your Slot for {eventDetails.name}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Event Name:</label>
                    <input
                        type="text"
                        name="eventName"
                        value={formData.eventName}
                        readOnly
                        required
                    />
                </div>
                <div>
                    <label>Event Date:</label>
                    <input
                        type="date"
                        name="bookingDate"
                        value={formData.bookingDate}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Number of Attendees:</label>
                    <input
                        type="number"
                        name="numberOfAttendees"
                        value={formData.numberOfAttendees}
                        onChange={handleChange}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Book Now</button>
            </form>
            <div>
                <Link to="/events">Back to Events</Link>
            </div>
        </div>
    );
}

export default EventBooking;
