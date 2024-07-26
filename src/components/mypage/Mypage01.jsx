import React from 'react' 
import def from '../../assets/img/mypage/profile.svg'

const Mypage01 = () => {
  return (
    <div className='profile'>
      <img src={def} alt="프로필" className='img'/>
      <h1 className='id'>soobin1121</h1>
      <hr className='line'/>
      
      <div className='det'>
        <div className='container01'>
          <h3 className='h3'>좌우명 한 줄 소개</h3>
          <p className='p'>메타인지를 제대로 하자!</p>
        </div>

        <div className='container02'>
          <h3 className='h3'>활동 내역</h3>
          <div className='counter'>
            <p className='p'>이번달 작성 목표</p>
            <p className='p'>1개</p>
          </div>
          <div className='counter'>
            <p className='p'>이번달 작성 상황</p>
            <p className='p'>1개</p>
          </div>
        </div>
      </div>

      <button className='modify'>개인정보 수정하기</button>
    </div>
  )
}

export default Mypage01