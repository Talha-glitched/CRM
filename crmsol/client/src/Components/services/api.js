import axios from 'axios';

// Base URL for your backend API
const API = axios.create({
    baseURL: 'http://localhost:5000/api', // Update if your backend runs on a different port
});

// Function to handle user signup
export const signupUser = async (userData) => {
    try {
        const response = await API.post('/auth/signup', userData);
        return response.data;
    } catch (error) {
        console.error('Signup Error:', error.response?.data || error.message);
        throw error.response?.data || { message: 'Server error' };
    }
};
