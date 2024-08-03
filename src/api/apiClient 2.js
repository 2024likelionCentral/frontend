import axios from 'axios';

// 환경 변수로부터 기본 URL을 가져옵니다.
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default apiClient;
