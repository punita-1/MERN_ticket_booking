import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>Logo</h2> {/* You can replace this with an actual logo */}
      </div>
      <div className={`menu-icon ${isMobile ? 'active' : ''}`} onClick={toggleMenu}>
        &#9776;
      </div>
      <ul className={`nav-list ${isMobile ? 'active' : ''}`}>
        <li><Link className="nav-item" to="/">Home</Link></li>
        <li><Link className="nav-item" to="/events">Events</Link></li>
        <li><Link className="nav-item" to="/login">Login</Link></li>
        <li><Link className="nav-item" to="/register">Register</Link></li>
        <li><Link className="nav-item" to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
