
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000'  // Make sure this port matches your backend
});

// Add request interceptor
instance.interceptors.request.use(function (config) {
    console.log('Request sent:', config);
    return config;
}, function (error) {
    console.log('Request error:', error);
    return Promise.reject(error);
});

// Add response interceptor
instance.interceptors.response.use(function (response) {
    console.log('Response received:', response);
    return response;
}, function (error) {
    console.log('Response error:', error);
    return Promise.reject(error);
});

export default instance;


