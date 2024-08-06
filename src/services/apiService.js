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


// 목표 조회 함수
export const getGoalById = async (goalId) => {
  try {
    const response = await apiClient.get(`/goals/${goalId}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch goal:', error);
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


// 목표 목록을 가져오는 함수
export const getGoals = async () => {
  try {
    const response = await apiClient.get('/goals');
    return response.data.goals; // 응답 데이터에서 goals 배열만 반환
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

export const getCircumstance = async (id) => {
  try {
    const response = await apiClient.get(`/circumstances/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch circumstance data:', error);

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

export const deleteCircumstance = async (id) => {
  try {
    const response = await apiClient.delete(`/circumstances/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch circumstance data:', error);

    throw error;
  }
};


export const getPriorityGoal = async () => {
  try {
    const response = await apiClient.get('/goals/priority');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch priority goal:', error);
    return { date: '', goal: '' };
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