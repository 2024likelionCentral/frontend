import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/action/action01.scss'
import Header from '../../components/action/Header';

const Action = ({ inputValue, setInputValue }) => {
    const maxLength = 200;
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        if (event.target.value.length <= maxLength) {
            setInputValue(event.target.value);
        }
    };
    const handleNextClick = () => {
        navigate('/action2');
    };

    return (
        <>
        <Header/>
        <div className="action01">
            <div className="action_back">
                <main>
                    <div className="date">2024 . 08 . 06</div>
                    <div className="title">오늘 인지할 상황은</div>
                    <div className="input-container">
                        <textarea
                            className="input"
                            type="text"
                            placeholder="오늘 하루 중 기억에 남는 상황에 대해 자유롭게 작성해보세요."
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <div className="char-count">{`${inputValue.length}/${maxLength}`}</div>
                    </div>
                    <div className="title">이다.</div>
                    <div className='btn'>
                        <button
                            className={`next-btn ${inputValue.trim() ? 'active' : ''}`}
                            disabled={!inputValue.trim()}
                            onClick={handleNextClick}
                        >
                            Next
                        </button>
                    </div>

                </main>
            </div>
        </div>
        </>
    )
}

export default Action