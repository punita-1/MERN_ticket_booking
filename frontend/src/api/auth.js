// frontend/src/api/auth.js

import axios from 'axios';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    return response.data;  // This is where the response comes from
  } catch (error) {
    console.error('Error during registration:', error.response?.data || error.message);
    throw error;  // Make sure to throw the error to handle it in the UI
  }
};
