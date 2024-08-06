import React, { useState } from 'react';
import '../styles/Goals.css'; // 引入自定义CSS

const GoalCard = ({ goal, onEdit, onDelete }) => (
  <div className="goal-card">
    <h3>{goal.title}</h3>
    <p>目标金额: {goal.targetAmount} 元</p>
    <p>当前余额: {goal.currentAmount} 元</p>
    <p>进度: {Math.round((goal.currentAmount / goal.targetAmount) * 100)}%</p>
    <button onClick={() => onEdit(goal)}>编辑</button>
    <button onClick={() => onDelete(goal.id)}>删除</button>
  </div>
);

const Goals = () => {
  const [goals, setGoals] = useState([
    { id: 1, title: '购车', targetAmount: 20000, currentAmount: 5000 },
    { id: 2, title: '旅行', targetAmount: 5000, currentAmount: 1500 },
  ]);

  const handleEdit = (goal) => {
    // 编辑目标逻辑
  };

  const handleDelete = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="goals-container">
      <h2>财务目标</h2>
      <button className="add-goal-btn">添加目标</button>
      <div className="goal-list">
        {goals.map(goal => (
          <GoalCard
            key={goal.id}
            goal={goal}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Goals;
