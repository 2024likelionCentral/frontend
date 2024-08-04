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
    localStorage.setItem('tokenType', response.data.tokenType);
    localStorage.setItem('accessToken', response.data.accessToken);
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

// 목표 추가 함수
export const addGoal = async (goalData) => {
  try {
    const response = await apiClient.post('/goals', goalData);
    return response.data;
  } catch (error) {
    console.error('Failed to add goal:', error);
    throw error;
  }
};

// 목표 조회 함수
export const getGoalById = async (goalId) => {
  try {
    const response = await apiClient.get(`/goals/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch goal:', error);
    throw error;
  }
  try {
    const response = await apiClient.get(`/goals/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch goal by id:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// 목표 목록을 가져오는 함수
export const getGoals = async () => {
  try {
    const response = await apiClient.get('/goals');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch goals:', error);
    throw error;
  }
};



// 목표의 우선순위를 설정하는 함수
export const setGoalPriority = async (goalId) => {
  try {
    const response = await apiClient.patch(`/goals/${goalId}/priority`);
    return response.data;
  } catch (error) {
    console.error('Failed to set goal priority:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const deleteGoal = async (goalId) => {
  try {
    const response = await apiClient.delete(`/goals/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete goal:', error.response ? error.response.data : error.message);
    throw error;
  }
};