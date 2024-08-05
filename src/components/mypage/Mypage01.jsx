import React, { useEffect, useState } from 'react';
import axios from 'axios'; // axios를 직접 임포트
import def from '../../assets/img/mypage/profile.svg';
import { useNavigate } from 'react-router-dom';

const Mypage01 = () => {
  const navigate = useNavigate();
  const [userProfile, setProfile] = useState({
    id: '',
    username: '',
    motto: '',
    profilePicture: def,
    monthlyGoal: 0,
    monthlyProgress: 0,
  });

  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      const profileResponse = await axios.get('http://15.165.73.36:1234/user-profile', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const userProfile = profileResponse.data;

      setProfile({
        id: userProfile.id,
        username: userProfile.username,
        motto: userProfile.motto,
        profilePicture: userProfile.profilePictureData ? `data:image/jpeg;base64,${userProfile.profilePicture}` : def,
        monthlyGoal: userProfile.monthlyGoal || 0,
        monthlyProgress: userProfile.monthlyProgress || 0,
      });
    } catch (error) {
      setError(error.message);
      console.error('Error fetching user profile:', error);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const modifyButtonClick = () => {
    navigate('/modify');
  };

  return (
    <div className='profile'>
      <img src={userProfile.profilePicture} alt="프로필" className='img' />
      <h1 className='id'>{userProfile.username || '아이디를 설정해 주세요.'}</h1>
      <hr className='line' />
      
      <div className='det'>
        <div className='container01'>
          <h3 className='h3'>좌우명 한 줄 소개</h3>
          <p className='p'>{userProfile.motto || '좌우명이 비어 있습니다.'}</p>
        </div>

        <div className='container02'>
          <h3 className='h3'>활동 내역</h3>
          <div className='counter'>
            <p className='p'>이번달 작성 목표</p>
            <p className='p'>{userProfile.monthlyGoal}개</p>
          </div>
          <div className='counter'>
            <p className='p'>이번달 작성 상황</p>
            <p className='p'>{userProfile.monthlyProgress}개</p>
          </div>
        </div>
      </div>

      <button className='modify' onClick={modifyButtonClick}>개인정보 수정하기</button>
    </div>
  );
};

export default Mypage01;