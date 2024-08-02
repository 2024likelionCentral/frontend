import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goaledit.scss';
import Header from '../../components/goal/Header';

const GoalEdit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };

  const handleSaveClick = () => {
    // 상위 목표로 설정하는 로직을 추가할 수 있습니다.
    navigate('/goalMain', { state: { goalText, sortedTexts } });
  };

  const handleRemoveClick = () => {
    // 삭제하는 로직을 추가할 수 있습니다.
    // 예시로, sortedTexts를 빈 배열로 설정하여 GoalMain으로 전달하는 로직을 추가했습니다.
    navigate('/goalMain', { state: { goalText, sortedTexts: [] } });
  };

  console.log('GoalEdit goalText:', goalText);
  console.log('GoalEdit sortedTexts:', sortedTexts);

  return (
    <div className="goal-edit">
      <Header />
      <div className="content">
        <main>
          <h1 className="conclusion">Conclusion</h1>
          <div className="date">2024 . 08 . 06</div>
          <div className="goal-text">{goalText}</div>
          <div className="goal-subtext">라는 목표를 이루기 위해</div>
          <div className="goals">
            {sortedTexts.map((text, index) => (
              <div className="goal-item" key={index}>
                <span className="priority">{index + 1}</span>
                {text}
              </div>
            ))}
          </div>
          <div className="goal">를 실천할 것이다.</div>
          <div className="button-container">
            <button className="set-btn" onClick={handleSaveClick}>상위목표로 설정하기</button>
            <button className="remove-btn" onClick={handleRemoveClick}>삭제하기</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GoalEdit;
