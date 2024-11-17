// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this with your backend URL

// Train API
export const getTrains = async (source, destination, departureTime) => {
    try {
        const response = await axios.get(`${API_URL}/trains/search`, {
            params: { source, destination, departureTime }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching trains:', error);
        throw error;
    }
};

// Flight API
export const getFlights = async (source, destination, departureTime) => {
    try {
        const response = await axios.get(`${API_URL}/flights/search`, {
            params: { source, destination, departureTime }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching flights:', error);
        throw error;
    }
};

// Hotel API
export const getHotels = async (location) => {
    try {
        const response = await axios.get(`${API_URL}/hotels/search`, {
            params: { location }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching hotels:', error);
        throw error;
    }
};

// Cab API
export const getCabs = async (location, cabType) => {
    try {
        const response = await axios.get(`${API_URL}/cabs/search`, {
            params: { location, cabType }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching cabs:', error);
        throw error;
    }
};
