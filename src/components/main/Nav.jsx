import React from 'react';
import close from '../../assets/img/main/close.svg';

const Nav = ({ onClose }) => {
    console.log('Nav received onClose:', onClose); // onClose prop이 전달되었는지 확인

    return (
      <div className='nav_wrap' onClick={(e) => e.stopPropagation()}>
        <img src={close} className='close' onClick={() => { console.log('Close button clicked'); onClose(); }} alt="Close" />
        <h1 className='home'>HOME</h1>
        <h1 className='circumstance'>CIRCUMSTANCE</h1>
        <h1 className='goal'>GOAL</h1>
        <h1 className='mypagemenu'>MYPAGE</h1>
      </div>
    );
};

export default Nav;
