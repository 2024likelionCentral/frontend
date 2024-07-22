import React from 'react';
import '../../assets/scss/header/header.scss';
import logo from '../../assets/img/header/meta_logo.png'; // 로고 이미지를 경로에 맞게 수정하세요

function Header() {
    console.log('Header is rendering');
    return (
        <header className="header">
            <div className="menu-icon">&#9776;</div> {/* 햄버거 메뉴 아이콘 */}
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="close-icon">&times;</div> {/* 닫기 버튼 */}
        </header>
    );
}

export default Header;
