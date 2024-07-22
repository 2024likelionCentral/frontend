import React from 'react'
import googlelogo from '../../assets/img/login/googlelogo.svg'

const Enter = () => {

    const loginButtonClick = () => {
        console.log('버튼 클릭됨!');
      }

    const googleButtonClick = () => {
    console.log('버튼 클릭됨!');
    }

  return (
    <div className='enter_wrap'>
        <div>
            <h1>로그인</h1>
            
            <div className='enterfield'>
                <input type='text' className='id' name='id' placeholder='아이디' />

                <input type='password' className='pw' name='pw' placeholder='비밀번호' />

                <div className='save'>
                    <input type='checkbox' className='checkbox' />
                    <p className='idsave'>아이디 정보 저장</p>
                </div>
            </div>

            <button className='loginbtn' onClick={loginButtonClick}>로그인</button> {/* 로그인 버튼*/}

            <div className='line'>
                <hr className='hr'/>
                <p className='or'>또는</p>
                <hr className='hr'/>
            </div>

            <button className='googlebtn' onClick={googleButtonClick}><img src={googlelogo} alt="google" className='googlelogo'/> 구글 계정으로 로그인</button> {/* 구글 로그인 버튼*/}

            <div className='option'>
                <h3>회원가입</h3>
                <div className='find'>
                    <h3 className='find_id'>계정 찾기</h3>
                    <h3>|</h3>
                    <h3 className='find_pw'>비밀번호 찾기</h3>
                </div>
            </div>
      </div>

    </div>
  )
}

export default Enter
