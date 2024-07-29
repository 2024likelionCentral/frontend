import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GoalItem from '../../components/GoalItem';
import '../../assets/scss/goal/goalMain.scss';
import newimg from '../../assets/img/goal/edit.png';

const GoalMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };

  const [goals, setGoals] = useState([
    { date: "2024. 07. 11", title: "팀프로젝트 마무리" },
    { date: "2024. 07. 05", title: "여기부턴 유슬" },
    { date: "2024. 06. 21", title: "40 받기기" },
    { date: "2024. 06. 19", title: "기말고사 끝내기" }
  ]);
  const [activeButton, setActiveButton] = useState('등록순'); // 활성화된 버튼 상태를 관리

  const handleSortOrderChange = (order) => {
    setActiveButton(order); // 활성화된 버튼 상태 업데이트
    const sortedGoals = [...goals];
    if (order === '최신순') {
      sortedGoals.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      sortedGoals.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    setGoals(sortedGoals);
  };

  const handleGoalItemClick = (goal) => {
    navigate('/goalEdit', { state: { goalText: goal.title, sortedTexts } });
  };

  return (
    <div className="goal-main">
      <p>Goal cognition</p>
      <div className="goal-header">
        <h1>2024. 07. 31 GOAL</h1>
        {/* h2에 클릭 이벤트 제거 및 스타일 수정 */}
        <h2>{goalText}</h2>
      </div>
      <div className="goal-check">
        <div className="check-here">
          <h3>CHECK HERE</h3>
          <h4>작성하신 실천 방법을 확인하며 인지 연습을 해보세요.</h4>
        </div>
        <ul>
          {sortedTexts.map((text, index) => (
            <div className="goal-item" key={index}>
              <span className="priority">{index + 1}</span>
              {text}
            </div>
          ))}
        </ul>
      </div>
      <div className="goal-content">
        <div className="goal-list">
          <div className="goal-count-sort-wrapper">
            <div className="goal-count">
              목표 {goals.length}개
            </div>
            <div className="sort-buttons">
              <button 
                onClick={() => handleSortOrderChange('등록순')} 
                className={activeButton === '등록순' ? 'active' : ''}
              >
                등록순
              </button>
              <button 
                onClick={() => handleSortOrderChange('최신순')} 
                className={activeButton === '최신순' ? 'active' : ''}
              >
                최신순
              </button>
            </div>
          </div>
          {goals.map((goal, index) => (
            <GoalItem
              key={index}
              date={goal.date}
              title={goal.title}
              // action 제거 및 클릭 이벤트 수정
              onClick={() => handleGoalItemClick(goal)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </div>
        <div className="execute">
          <ul>
            <h2>실천 방법</h2>
            {sortedTexts.map((text, index) => (
              <div className="goal-item" key={index}>
                <span className="priority">{index + 1}</span>
                {text}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="button-container">
        <button className="new-btn" onClick={() => navigate('/')}>New <img src={newimg} alt="new" /></button>
      </div>
    </div>
  );
};

export default GoalMain;
