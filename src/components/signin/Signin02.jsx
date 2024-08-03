import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/img/login/googlelogo.svg';
import { signup } from '../../services/apiService';

const Signin02 = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
    password2: ''
  });

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const signButtonClick = async () => {
    if (form.password !== form.password2) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userData = {
        username: form.email,
        password: form.password,
        role: 'ROLE_USER'
      };
      const response = await signup(userData);
      alert('Signup successful!');
      navigate('/main');
    } catch (error) {
      setError(error.response ? error.response.data : 'Signup failed');
    }
  };

  const googleButtonClick = () => {
    console.log('버튼 클릭됨!');
  };

  return (
    <div className='signin02_wrap'>
      <div className='enterfield'>
        <h1 className='signup'>회원가입</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          type='text'
          className='email'
          name='email'
          placeholder='아이디'
          value={form.email}
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
        <p className='or'>영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>
        <input
          type='password'
          className='pw'
          name='password2'
          placeholder='비밀번호 확인'
          value={form.password2}
          onChange={handleChange}
        />
        <div className='save'>
          <input type='checkbox' className='checkbox' />
          <p className='infosave'>이용약관 및 개인정보 처리방침에 동의합니다.</p>
        </div>
        <button className='signbtn' onClick={signButtonClick}>회원가입</button>
      </div>
      <div className='line'>
        <hr className='hr' />
        <p className='or'>또는</p>
        <hr className='hr' />
      </div>
      <button className='googlebtn' onClick={googleButtonClick}>
        <img src={googlelogo} alt="google" className='googlelogo' /> 구글 계정으로 회원가입
      </button>
      <div className='change_area'>
        <p className='optional'>이미 Metalog 회원이신가요?</p>
        <p className='turn_login'>로그인</p>
      </div>
    </div>
  );
};

export default Signin02;
