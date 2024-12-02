// src/components/SplashScreen.jsx
import React from 'react';
import './SplashScreen.css'; // Importing CSS for styling

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <div className="splash-content">
                <h1 className="splash-title">Ticket Booking App</h1>
                <p className="splash-subtitle">Your gateway to seamless ticketing</p>
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default SplashScreen;
