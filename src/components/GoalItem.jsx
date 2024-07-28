// GoalItem.jsx
import React from 'react';

const GoalItem = ({ date, title, action }) => {
  return (
    <div className="goal-item">
      <div className="goal-date">{date}</div>
      <div className="goal-title">{title}</div>
      {action && <div className="goal-action">{action}</div>}
    </div>
  );
};

export default GoalItem;
