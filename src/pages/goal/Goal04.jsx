import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goal04.scss';
import checkimg from '../../assets/img/goal/check.png';

const Goal04 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };

  const handleSaveClick = () => {
    navigate('/goalMain', { state: { goalText, sortedTexts } });
  };

  return (
    <div className="goal04">
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
            <button className="save-btn" onClick={handleSaveClick}>
              SAVE <img src={checkimg} alt="check" />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Goal04;
