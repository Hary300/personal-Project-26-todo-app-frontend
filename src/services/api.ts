import axios from 'axios';

// import.meta.env.VITE_PUBLIC_API_URL
const URL = import.meta.env.VITE_PUBLIC_API_URL;

export const api = axios.create({
  baseURL: URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});
