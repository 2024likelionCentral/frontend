import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goalMain.scss';

const GoalMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };

  return (
    <div className="goal-main">
      <header>
        <h1>Goal cognition</h1>
      </header>
      <div className="content">
        <div className="goal-date">
          <span className="date">2024 . 07 . 31 GOAL</span>
          <span className="goal-text">{goalText}</span>
        </div>
        <div className="check-here">
          <h2>CHECK HERE</h2>
          <p>작성하신 실천 방법을 확인하며 인지 연습을 해보세요.</p>
        </div>
        <div className="goal-list">
          {sortedTexts.map((text, index) => (
            <div className="goal-item" key={index}>
              <span className="priority">{index + 1}</span>
              {text}
            </div>
          ))}
        </div>
        <div className="button-container">
          <button className="new-btn" onClick={() => navigate('/newGoal')}>
            NEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoalMain;
