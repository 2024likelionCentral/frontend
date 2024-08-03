import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/img/login/googlelogo.svg';
import Footer from '../../components/enter/Footer';
import { login } from '../../services/apiService';

// 로그인 정보 입력 창
const Enter = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const loginButtonClick = async () => {
    try {
      const response = await login(form);
      alert('Login successful!');
      localStorage.setItem('accessToken', response.accessToken);
      localStorage.setItem('refreshToken', response.refreshToken);
      navigate('/main');
    } catch (error) {
      setError(error.response ? error.response.data : 'Login failed');
    }
  };

  const googleButtonClick = () => {
    console.log('구글 로그인 버튼 클릭됨!');
  };

  return (
    <>
      <div className='enter_wrap'>
        <div>
          <h1 className='h1'>로그인</h1>

          <div className='enterfield'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
              type='text'
              className='id'
              name='username'
              placeholder='아이디'
              value={form.username}
              onChange={handleChange}
            />
            <input
              type='password'
              className='pw'
              name='password'
              placeholder='비밀번호'
              value={form.password}
              onChange={handleChange}
            />
            <div className='save'>
              <input type='checkbox' className='checkbox' />
              <p className='idsave'>아이디 정보 저장</p>
            </div>
          </div>

          <button className='loginbtn' onClick={loginButtonClick}>로그인</button> {/* 로그인 버튼 */}

          <div className='line'>
            <hr className='hr' />
            <p className='or'>또는</p>
            <hr className='hr' />
          </div>

          <button className='googlebtn' onClick={googleButtonClick}>
            <img src={googlelogo} alt="google" className='googlelogo' /> 구글 계정으로 로그인
          </button> {/* 구글 로그인 버튼 */}

          <div className='option'>
            <h3 className='signup'>회원가입</h3>
            <div className='find'>
              <h3 className='find_id'>계정 찾기</h3>
              <h3>|</h3>
              <h3 className='find_pw'>비밀번호 찾기</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Enter;
