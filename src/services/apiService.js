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

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    console.log('API response:', response.data); // 응답 데이터 로그 출력
    const { userId, accessToken, refreshToken } = response.data;
    localStorage.setItem('userId', userId); // Store the user ID
    localStorage.setItem('accessToken', accessToken); // Store the access token
    localStorage.setItem('refreshToken', refreshToken); // Store the refresh token
    return response.data;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};
  
  export const fetchUserProfile = async () => {
    try {
      const response = await apiClient.get(`/user-profile`);
      console.log('Profile Response:', response.data); // 응답 데이터 로그
      return response.data;
    } catch (error) {
      console.error('Error fetching user profile:', error);
      if (error.response) {
        console.error('Response error data:', error.response.data); // 응답 오류 데이터 로그
        console.error('Response status:', error.response.status); // 응답 상태 코드 로그
      }
      throw error;
    }
  };

export const fetchUserProfilePicture = async () => {
  try {
    const response = await apiClient.get(`/user-profile/profile-picture`);
    console.log('Profile Picture Response:', response.data); // 응답 데이터 로그
    return response.data;
  } catch (error) {
    console.error('Error fetching user profile picture:', error);
    throw error;
  }
};