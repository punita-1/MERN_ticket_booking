// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errorMessage, setErrorMessage] = useState('');
//   const history = useNavigate();

//   // Handle form field changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/login', formData);
//       console.log(response.data);
//       localStorage.setItem('token', response.data.token);  // Save JWT token in localStorage
//       history.push('/dashboard'); // Redirect to the dashboard after login
//     } catch (error) {
//       setErrorMessage(error.response.data.message || 'Error occurred');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login to Ticket Booking</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Use navigate from 'react-router-dom' for redirects

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields (optional)
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill in both fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);  // Corrected URL
      console.log(response.data);

      // Store JWT token in localStorage
      localStorage.setItem('token', response.data.token);

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (error) {
      // Handle error more gracefully
      if (error.response) {
        setErrorMessage(error.response.data.msg || 'Error occurred');
      } else {
        setErrorMessage('Server error or no response');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
