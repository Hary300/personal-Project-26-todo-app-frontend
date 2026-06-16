import axios from 'axios';

const URL = import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:3000';

export const api = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
