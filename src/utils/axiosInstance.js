// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://apna-app.onrender.com', 
});

// Optional: log requests for debugging
axiosInstance.interceptors.request.use((config) => {
  console.log("🚀 Axios Request:", config.method?.toUpperCase(), config.url);
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("✅ Axios Response:", response.data);
    return response;
  },
  (error) => {
    console.error("❌ Axios Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
