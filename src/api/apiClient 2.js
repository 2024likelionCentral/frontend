import axios from 'axios';

const TOKEN_TYPE = localStorage.getItem('tokenType');
let ACCESS_TOKEN = localStorage.getItem('accessToken');

const apiClient = axios.create({
  baseURL: 'http://15.165.73.36:1234',
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers['Authorization'] = `${TOKEN_TYPE} ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default apiClient;
