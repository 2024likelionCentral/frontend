// GoalItem.jsx
import React from 'react';

const GoalItem = ({ date, title, action, onClick }) => {
  return (
    <div className="goal-item" onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="goal-date">{date}</div>
      <div className="goal-title">{title}</div>
    </div>
  );
};

export default GoalItem;
