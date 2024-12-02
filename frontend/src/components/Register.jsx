import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/auth';
import './Register.css'; // Importing the CSS file

const Register = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const userData = { email, phone, password };

    try {
      const response = await registerUser(userData);
      alert('Registered successfully!');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="register-input"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
          className="register-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="register-input"
        />
        <button type="submit" disabled={isLoading} className="register-button">
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {isLoading && <div className="loader"></div>}
      {/* <br /> */}
      <div className="register-link">
        <Link to="/login">Already have an account?Login</Link>
      </div>
    </div>
  );
};

export default Register;
