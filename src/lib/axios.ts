import axios from 'axios';

// call API URL from .env file
const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Accept': 'application/json',
  },
});

// add token to request headers if exists
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default api;