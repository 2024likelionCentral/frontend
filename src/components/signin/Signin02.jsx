import React from 'react'
import googlelogo from '../../assets/img/login/googlelogo.svg'

// 회원가입 정보 입력

const Signin02 = () => {

  const signButtonClick = () => {
    console.log('버튼 클릭됨!');
  }

  const googleButtonClick = () => {
    console.log('버튼 클릭됨!');
    }

  return (
    <div className='signin02_wrap'>
      <div className='enterfield'>
        <h1 className='signup'>회원가입</h1>

        <input type='text' className='email' name='email' placeholder='이메일' />

        <input type='password' className='pw' name='pw' placeholder='비밀번호' />
        <p className='or'>영문, 숫자 조합의 8자 이상 20자 이하로 입력해주세요.</p>

        <input type='password' className='pw' name='pw2' placeholder='비밀번호 확인' />

        <div className='save'>
            <input type='checkbox' className='checkbox' />
            <p className='infosave'>이용약관 및 개인정보 처리방침에 동의합니다.</p>
        </div>

        <button className='signbtn' onClick={signButtonClick}>회원가입</button> {/* 회원가입 버튼*/}
      </div>

      <div className='line'>
          <hr className='hr'/>
          <p className='or'>또는</p>
          <hr className='hr'/>
      </div>

      <button className='googlebtn' onClick={googleButtonClick}><img src={googlelogo} alt="google" className='googlelogo'/> 구글 계정으로 회원가입</button> {/* 구글 로그인 버튼*/}

      <div className='change_area'>
        <p className='optional'>이미 Metalog 회원이신가요?</p>
        <p className='turn_login'>로그인</p>
      </div>

    </div>
  )
}

export default Signin02