import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/img/login/googlelogo.svg';
import { signup } from "../../api/AuthAPI";
import './CheckboxStyles.css';

export default function Signin02() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();
  const signButtonClick = () => {
    console.log('회원가입 버튼 클릭됨!');
  }

  const googleButtonClick = () => {
    console.log('구글 로그인 버튼 클릭됨!');
  }

  const loginButtonClick = () => {
    navigate('/enter');
  }

  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.id]: e.target.value,
    });
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    setAgreeToTerms(e.target.checked);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreeToTerms) {
      alert("이용약관 및 개인정보 처리방침에 동의해야 합니다.");
      return;
    }

    if (values.password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      await signup(values);
      navigate('/enter');
      
    } catch (error) {
      console.log("Signup Error:", error);
      if (error.response) {
          console.log("Error Response:", error.response.data);
          console.log("Error Status:", error.response.status);
          console.log("Error Headers:", error.response.headers);
      } else if (error.request) {
          console.log("Error Request:", error.request);
      } else {
          console.log("Error Message:", error.message);
      }
    }
  }

  return (
    <div className='signin02_wrap'>
      <div className='enterfield'>
        <h1 className='signup'>회원가입</h1>

        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='email'
            id='username'
            onChange={handleChange}
            value={values.username}
            placeholder='아이디'
          />

          <input
            type='password'
            className='pw'
            id='password'
            onChange={handleChange}
            value={values.password}
            placeholder='비밀번호'
          />

          <p className='or'>영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>

          <input
            type='password'
            className='pw'
            id='confirmPassword'
            onChange={handleConfirmPasswordChange}
            value={confirmPassword}
            placeholder='비밀번호 확인'
          />

          <div className='checkbox-container'>
            <label className='checkbox-label'>
              <input
                type='checkbox'
                id='terms'
                checked={agreeToTerms}
                onChange={handleCheckboxChange}
              />
              <div className='checkbox-custom'></div>
              <p className='infosave'>이용약관 및 개인정보 처리방침에 동의합니다.</p>
            </label>
          </div>

          <button type='submit' className='signbtn' onClick={signButtonClick}>회원가입</button>
        </form>
      </div>

      <div className='line'>
        <hr className='hr'/>
        <p className='or'>또는</p>
        <hr className='hr'/>
      </div>

      <button className='googlebtn' onClick={googleButtonClick}>
        <img src={googlelogo} alt="google" className='googlelogo'/>
        구글 계정으로 회원가입
      </button>

      <div className='change_area'>
        <p className='optional'>이미 Metalog 회원이신가요?</p>
        <p className='turn_login' onClick={loginButtonClick}>로그인</p>
      </div>
    </div>
  )
}
