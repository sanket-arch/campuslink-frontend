import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_CAMPUS_LINK_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const auth_Token = document.cookie.split('; ').find(row => row.startsWith('auth_token=')).split('=')[1];
    if (auth_Token) {
      config.headers.Authorization = `Bearer ${auth_Token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default api;