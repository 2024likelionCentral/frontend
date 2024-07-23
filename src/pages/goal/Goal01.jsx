import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import '../../assets/scss/goal/goal01.scss';
import '../../assets/scss/setting/resets.scss';

function Goal01({ setGoalText }) {
  const [inputValue, setInputValue] = useState('');
  const maxLength = 20;
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    if (event.target.value.length <= maxLength) {
      setInputValue(event.target.value);
    }
  };

  const handleNextClick = () => {
    if (inputValue.trim()) {
      setGoalText(inputValue);
      navigate('/goal02');
    }
  };

  return (
    <div className="goal01">
      <div className="content">
        <main>
          <div className="date">2024 . 08 . 06</div>
          <div className="title">이루고자 하는 목표는</div>
          <div className="input-container">
            <input
              className="input"
              type="text"
              placeholder="이루고자 하는 목표가 무엇인지 작성해주세요."
              value={inputValue}
              onChange={handleInputChange}
            />
            <div className="char-count">{`${inputValue.length}/${maxLength}`}</div>
          </div>
          <div className="goal">이다.</div>
          <button
            className={`next-btn ${inputValue.trim() ? 'active' : ''}`}
            disabled={!inputValue.trim()}
            onClick={handleNextClick}
          >
            Next
          </button>
        </main>
      </div>
    </div>
  );
}

export default Goal01;
