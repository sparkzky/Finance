import React, { useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Budget.css'; // 引入自定义CSS

const data = [
  { name: '已使用', value: 400 },
  { name: '剩余', value: 600 },
];

const Budget = () => {
  const [budget, setBudget] = useState(1000);
  const [spent, setSpent] = useState(400);

  const handleSetBudget = () => {
    const newBudget = prompt('请输入新的预算金额:', budget);
    if (newBudget && !isNaN(newBudget)) {
      setBudget(Number(newBudget));
    }
  };

  return (
    <div className="budget-container">
      <h2>预算管理</h2>
      <div className="budget-summary">
        <h3>总预算: {budget} 元</h3>
        <h4>已使用: {spent} 元</h4>
        <button onClick={handleSetBudget}>设置预算</button>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#ff7300' : '#00c49f'} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Budget;
