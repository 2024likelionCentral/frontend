import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googlelogo from '../../assets/img/login/googlelogo.svg';
import Footer from '../../components/enter/Footer';
import { login } from '../../api/AuthAPI';

export default function Enter() {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const handleChange = async (e) => {
      setValues({...values,
          [e.target.id]: e.target.value,
      });
  }

  const handleSubmit = async (e) => {
    login(values)
    .then((response) => {
        localStorage.clear();
        localStorage.setItem('tokenType', response.tokenType);
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        window.location.href = `/main`;
    }).catch((error) => {
        console.log(error);
    });
}

    const navigate = useNavigate();
    const loginButtonClick = () => {
      console.log('로그인 버튼 클릭됨!');
    };

    const googleButtonClick = () => {
        console.log('구글 로그인 버튼 클릭됨!');
    };

    const signinButtonClick = () => {
      navigate('/signin');
    };

    return (
        <>
        <div className='enter_wrap'>
            <div>
                <h1 className='h1'>로그인</h1>

                <form onSubmit={handleSubmit}>
                  <div className='enterfield'>
                      <input 
                          type='text' 
                          className='id'  
                          id='email'
                          onChange={handleChange} 
                          value={values.email} // 수정
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

                      <div className='save'>
                          <input type='checkbox' className='checkbox' />
                          <p className='idsave'>아이디 정보 저장</p>
                      </div>
                  </div>

                  <button type='submit' className='loginbtn' onClick={loginButtonClick}>로그인</button>
                </form>

                <div className='line'>
                    <hr className='hr'/>
                    <p className='or'>또는</p>
                    <hr className='hr'/>
                </div>

                <button className='googlebtn' onClick={googleButtonClick}>
                  <img src={googlelogo} alt="google" className='googlelogo'/> 구글 계정으로 로그인
                </button>

                <div className='option'>
                    <h3 className='signup' onClick={signinButtonClick}>회원가입</h3>
                    <div className='find'>
                        <h3 className='find_id'>계정 찾기</h3>
                        <h3>|</h3>
                        <h3 className='find_pw'>비밀번호 찾기</h3>
                    </div>
                </div>
          </div>
        </div>
        <Footer/>
        </>
    );
}
