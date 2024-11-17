// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar'; // Import Navbar component
// import Login from './pages/Login';
// import Register from './pages/Register';
// import Events from './pages/Events'; // Events Page
// import Booking from './pages/Booking'; // General Booking Page
// import Profile from './pages/Profile';
// import Payment from './pages/Payment';
// import Home from './pages/Home';
// import TrainBooking from './pages/TrainBooking'; // Import specific booking pages
// // import BusBooking from './pages/BusBooking'; // Similarly for other services
// // import FlightBooking from './pages/FlightBooking'; 
// // import HotelBooking from './pages/HotelBooking'; 
// // import EventBooking from './pages/EventBooking';
// // import CabBooking from './pages/CabBooking';
// import BusBooking from './pages/BusBooking';
// import FlightBooking from './pages/FlightBooking';
// import HotelBooking from './pages/HotelBooking';
// import EventBooking from './pages/EventBooking';
// import CabBooking from './pages/CabBooking';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} /> {/* Home Page */}
//         <Route path="/events" element={<Events />} /> {/* Events Page */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/payment/:bookingId" element={<Payment />} />

//         {/* Booking Pages */}
//         <Route path="/booking/train" element={<TrainBooking />} />
//         <Route path="/booking/bus" element={<BusBooking />} />
//         <Route path="/booking/flight" element={<FlightBooking />} />
//         <Route path="/booking/hotel" element={<HotelBooking />} />
//         <Route path="/booking/event" element={<EventBooking />} />
//         <Route path="/booking/cab" element={<CabBooking />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
// src/App.js
// import React from "react";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard'; // Import Dashboard component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> {/* Add the dashboard route */}
        <Route path="/" element={<h2>Welcome to the Ticket Booking App</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
