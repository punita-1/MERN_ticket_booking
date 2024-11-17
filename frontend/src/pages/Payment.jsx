import React from 'react';
import { useParams } from 'react-router-dom';

function Payment() {
    const { bookingId } = useParams();

    const handlePayment = (e) => {
        e.preventDefault();
        // Integrate with payment API
    };

    return (
        <div>
            <h2>Payment for Booking ID: {bookingId}</h2>
            <form onSubmit={handlePayment}>
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="Expiration Date" required />
                <input type="text" placeholder="CVC" required />
                <button type="submit">Pay Now</button>
            </form>
        </div>
    );
}

export default Payment;
