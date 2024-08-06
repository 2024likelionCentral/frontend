import apiClient from '../api/apiClient 2';

// 회원가입 함수
export const signup = async (userData) => {
  try {
    const response = await apiClient.post('/auth/signup', userData);
    return response.data;
  } catch (error) {
    console.error('Signup failed:', error);
    throw error;
  }
};

// 로그인 함수
export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    localStorage.setItem('accessToken', response.data.accessToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('userId', response.data.userId); // userId 저장
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

//액세스 토큰 발급
export const fetchUserData = async () => {
  try {
    const response = await apiClient.get('/auth/refresh');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
};

export const saveActionData = async (data) => {
  try {
    const response = await apiClient.post('/circumstances', data);
    return response.data;
  } catch (error) {
    console.error('Failed to save action data:', error);
    throw error;
  }
};

export const getCircumstance = async (id) => {
  try {
    const response = await apiClient.get(`/circumstances/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch circumstance data:', error);
    throw error;
  }
};

export const deleteCircumstance = async (id) => {
  try {
    const response = await apiClient.delete(`/circumstances/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch circumstance data:', error);
    throw error;
  }
};

export const gettotalCircumstances = async () => {
  try {
    const response = await apiClient.get('/circumstances');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch circumstances:', error);
    throw error;
  }
};