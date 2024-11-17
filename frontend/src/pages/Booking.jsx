import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Booking() {
    const { eventId } = useParams();
    const navigate = useNavigate();
    const [selectedSeat, setSelectedSeat] = useState(null);

    const handleSeatSelect = (seat) => {
        setSelectedSeat(seat);
    };

    const handleConfirmBooking = () => {
        // Proceed to payment
        navigate(`/payment/${eventId}`);
    };

    return (
        <div>
            <h2>Book a Seat</h2>
            <div>
                {/* Render seat layout */}
                <button onClick={() => handleSeatSelect(1)}>Seat 1</button>
                <button onClick={() => handleSeatSelect(2)}>Seat 2</button>
                {/* Add more seats */}
            </div>
            <button onClick={handleConfirmBooking} disabled={!selectedSeat}>
                Proceed to Payment
            </button>
        </div>
    );
}

export default Booking;
