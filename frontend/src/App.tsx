import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import TrainBooking from './components/TrainBooking';
import FlightBooking from './components/FlightBooking';
import HotelBooking from './components/HotelBooking';
import CabBooking from './components/CabBooking';
import Profile from './components/Profile';

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Show splash screen for 3 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <Router>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/train-booking" element={<TrainBooking />} />
          <Route path="/flight-booking" element={<FlightBooking />} /> {/* Flight Booking */}
          <Route path="/hotel-booking" element={<HotelBooking />} /> {/* Hotel Booking */}
          <Route path="/cab-booking" element={<CabBooking />} />
          <Route path="/profile/:userId" element={<Profile />} />

          {/* <Route path="/train-booking" element={<TrainBooking />} /> */}
          <Route path="/" element={<Login />} /> {/* Redirect to Login after splash */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
