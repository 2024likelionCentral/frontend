import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goal02.scss';

const Goal02 = ({ goalText }) => {
  const [inputValue, setInputValue] = useState('');
  const maxLength = 30;
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setInputValue(event.target.value);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="goal02">
    <div className="content">
      <main>
        <div className="date">2024 . 08 . 06</div>
        <div className="goal-text">{goalText}</div>
        <div className="goal-subtext">을/를 위해서는</div>
          <div className="input-container02">
            <input
              className="input"
              type="text"
              placeholder="목표를 달성하기 위해 필요하다고 생각되는 방법을 적어주세요."
              value={inputValue}
              onChange={handleInputChange}
            />
            <div className="char-count">{`${inputValue.length}/${maxLength}`}</div>
          </div>
          <div className="goal">이/가 필요하다</div>
          <div className="button-container">
            <button className="back-btn" onClick={handleBackClick}>
              Back
            </button>
            <button
              className={`next-btn ${inputValue.trim() ? 'active' : ''}`}
              disabled={!inputValue.trim()}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Goal02;
