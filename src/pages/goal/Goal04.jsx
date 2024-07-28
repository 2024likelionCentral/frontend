import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GoalItem from '../../components/GoalItem';
import '../../assets/scss/goal/goalMain.scss';
import newimg from '../../assets/img/goal/edit.png'

const GoalMain = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { goalText, sortedTexts } = location.state || { goalText: '', sortedTexts: [] };
  
  console.log('GoalMain - goalText:', goalText);
  console.log('GoalMain - sortedTexts:', sortedTexts);

  const goalList = [
    { date: "2024. 07. 11", title: "팀프로젝트 마무리", action: "PM과 소통하여 일정 조율하기" },
    { date: "2024. 07. 05", title: "여기부턴 유슬", action: "자료를 수집해 최종 연출을 준비 주기" },
    { date: "2024. 06. 21", title: "40 받기기", action: "발표 자료 모으고 만들기" },
    { date: "2024. 06. 19", title: "기말고사 끝내기" }
  ];

  const handleGoalTextClick = () => {
    navigate('/goalEdit', { state: { goalText, sortedTexts } });
  };

  return (
    <div className="goal-main">
      <p>Goal cognition</p>
      <div className="goal-header">
        <h1>2024. 07. 31 GOAL</h1>
        <h2 onClick={handleGoalTextClick} style={{ cursor: 'pointer', textDecoration: 'underline' }}>{goalText}</h2>
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
          {goalList.map((goal, index) => (
            <GoalItem
              key={index}
              date={goal.date}
              title={goal.title}
              action={goal.action}
            />
          ))}
          <GoalItem
            date="2024. 07. 31"
            title={goalText}
            action=""
          />
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
