import axios from 'axios';

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/register', userData);
        return response.data;  // Return response with token
    } catch (error) {
        throw error.response?.data || { message: "Registration failed" };
    }
};

// Login user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post('http://localhost:5000/api/auth/login', credentials);
        return response.data;  // Return response with token
    } catch (error) {
        throw error.response?.data || { message: "Login failed" };
    }
};
