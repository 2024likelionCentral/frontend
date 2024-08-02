import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../../components/main/Nav';
import '../../assets/scss/header/header.scss';
import logo from '../../assets/img/header/meta_logo.png'; // 로고 이미지를 경로에 맞게 수정하세요

function Header() {
    const navigate = useNavigate();

    const mypageButtonClick = () => {
        navigate('/mypage');
    }

    const logoClick = () => {
        navigate('/main');
    }

    const closeIconClick = () => {
        navigate('/goalMain');
    }

    const [isNavVisible, setIsNavVisible] = useState(false);

    const toggleNavVisibility = () => {
        setIsNavVisible(prev => !prev);
    };

    const closeNav = () => {
        setIsNavVisible(false);
    };

    console.log('Header is rendering');

    return (
        <>
        {/* Nav 컴포넌트를 상태에 따라 한 번만 렌더링 */}
        {isNavVisible && <Nav onClose={closeNav} />}
        <header className="header">
            <div 
                className="menu-icon" 
                onClick={toggleNavVisibility}
            >
                &#9776;
            </div>
            <div className="logo1">
                <img src={logo} alt="Logo" onClick={logoClick}/>
            </div>
            <div 
                className="close-icon" 
                onClick={closeIconClick}
            > 
                &times;
            </div> {/* 닫기 버튼 */}
        </header>
        </>
    );
}

export default Header;
