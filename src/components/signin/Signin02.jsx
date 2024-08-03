import React, { useState } from 'react';
import axios from 'axios';
import googlelogo from '../../assets/img/login/googlelogo.svg'

// 회원가입 정보 입력

const Signin02 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [agree, setAgree] = useState(false);

  const signButtonClick = async () => {
    if (password !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!agree) {
      alert('이용약관 및 개인정보 처리방침에 동의해주세요.');
      return;
    }

    try {
      const response = await axios.post('http://15.165.73.36:1234/auth/signup', {
        username: email,
        role: 'ROLE_USER',
        password: password,
      });
      alert('회원가입 성공!');
      console.log('회원가입 성공:', response.data);
    } catch (error) {
      alert('회원가입 실패: 서버 오류가 발생했습니다.');
      console.error('회원가입 오류:', error);
    }
  };

  const googleButtonClick = () => {
    console.log('구글 버튼 클릭됨!');
  };

  return (
    <div className='signin02_wrap'>
      <div className='enterfield'>
        <h1 className='signup'>회원가입</h1>

        <input
          type='text'
          className='email'
          name='email'
          placeholder='이메일'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          className='pw'
          name='pw'
          placeholder='비밀번호'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className='or'>영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>

        <input
          type='password'
          className='pw'
          name='pw2'
          placeholder='비밀번호 확인'
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />

        <div className='save'>
          <input
            type='checkbox'
            className='checkbox'
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <p className='infosave'>이용약관 및 개인정보 처리방침에 동의합니다.</p>
        </div>

        <button className='signbtn' onClick={signButtonClick}>회원가입</button> {/* 회원가입 버튼*/}
      </div>

      <div className='line'>
        <hr className='hr' />
        <p className='or'>또는</p>
        <hr className='hr' />
      </div>

      <button className='googlebtn' onClick={googleButtonClick}>
        <img src={googlelogo} alt="google" className='googlelogo' /> 구글 계정으로 회원가입
      </button> {/* 구글 로그인 버튼*/}

      <div className='change_area'>
        <p className='optional'>이미 Metalog 회원이신가요?</p>
        <p className='turn_login'>로그인</p>
      </div>
    </div>
  );
};

export default Signin02;