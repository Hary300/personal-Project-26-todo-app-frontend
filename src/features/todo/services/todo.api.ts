import axios from 'axios';

const baseUrl = import.meta.env.VITE_PUBLIC_API_URL;

const token = localStorage.getItem('token');

export const api = axios.create({
  baseURL: baseUrl || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

// Intercept every outgoing request before it is sent
api.interceptors.request.use((config) => {
  // Get the latest token from localStorage
  const token = localStorage.getItem('token');

  // Attach the token to the Authorization header if it exists
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // Return the modified request configuration
  return config;
});
