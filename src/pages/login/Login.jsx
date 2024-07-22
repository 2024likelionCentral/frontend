import React from 'react';
import startlogo from '../../assets/img/icon/logo.svg'

const Login = () => {

  const tryButtonClick = () => {
    console.log('버튼 클릭됨!');
  }

  const alreadyButtonClick = () => {
    console.log('버튼 클릭됨!');
  }

  return (
    <div className='login_wrap'>
        <div>
            <img src={startlogo} alt="startlogo" className='startlogo'/>
            <p>'나'를 파악하고 메타인지 능력을 향상시켜보세요.</p>
            <h3>Let's Start!</h3>
            <button className='trybtn' onClick={tryButtonClick}>Try it for free</button> {/* try it for free 버튼 svg */}
            <button className='alreadybtn' onClick={alreadyButtonClick}>I already have an account</button> {/* i already have an account 버튼 svg */}
        </div>
    </div>

  )
}

export default Login