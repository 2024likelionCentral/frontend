import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GoalItem from '../../components/GoalItem';
import '../../assets/scss/goal/goalMain.scss';
import Header from '../../components/main/Header';
import newimg from '../../assets/img/goal/edit.png';
import { getGoals } from '../../services/apiService';

// 유틸리티 함수
const getFormattedDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year} . ${month} . ${day}`;
};

const GoalMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts, createdTime } = location.state || { goalText: '', sortedTexts: [], createdTime: '' };

  const [goals, setGoals] = useState([]);
  const [activeButton, setActiveButton] = useState('등록순'); // 활성화된 버튼 상태를 관리

  useEffect(() => {
    const fetchGoals = async () => {
      try {
        const goals = await getGoals();
        console.log('Fetched goals:', goals); // 데이터 로그 출력
        setGoals(goals);
      } catch (error) {
        console.error('Failed to fetch goals:', error);
      }
    };

    fetchGoals();
  }, []);

  useEffect(() => {
    if (goalText && sortedTexts.length > 0) {
      const date = createdTime ? getFormattedDate(new Date(createdTime).toISOString()) : getFormattedDate(new Date().toISOString());
      const newGoal = { id: goals.length + 1, date, title: goalText, actions: sortedTexts, priority: true };
      setGoals(prevGoals => [...prevGoals, newGoal]);
    }
  }, [goalText, sortedTexts, createdTime]);

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
    navigate(`/goalEdit/${goal.id}`, { state: { goalText: goal.title, sortedTexts: goal.actions, createdTime: goal.createdTime } });
  };

  return (
    <div className="goal-main">
      <Header />
      <p>Goal cognition</p>
      <div className="goal-header">
        <h1><div className="date">{createdTime ? getFormattedDate(new Date(createdTime).toISOString()) : getFormattedDate(new Date().toISOString())} GOAL </div></h1> {/* 목표 작성 날짜 표시 */}
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
              date={goal.createdTime ? getFormattedDate(new Date(goal.createdTime).toISOString()) : '날짜 없음'} // createdTime이 undefined일 경우
              title={goal.goal}
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
        <button className="new-btn" onClick={() => navigate('/goal01')}>New <img src={newimg} alt="new" /></button>
      </div>
    </div>
  );
};

export default GoalMain;
