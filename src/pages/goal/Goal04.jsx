import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../../assets/scss/setting/resets.scss';
import '../../assets/scss/goal/goal04.scss';
import checkimg from '../../assets/img/goal/check.png';
import Header from '../../components/goal/Header';
import axios from 'axios';

const Goal04 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };

  const handleSaveClick = async () => {
    try {
      await axios.post('http://15.165.73.36:1234/goals', {
        goal: goalText,
        actions: sortedTexts,
      });
      alert('작성 성공!');
      navigate('/goalMain', { state: { goalText, sortedTexts } });
    } catch (error) {
      alert('실패');
    }
  };

  return (
    <div className="goal04">
      <Header/>
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
