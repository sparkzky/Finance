import React, { useState } from 'react';
import '../styles/Alerts.css'; // 引入自定义CSS

const AlertCard = ({ alert, onEdit, onDelete }) => (
  <div className="alert-card">
    <h3>{alert.title}</h3>
    <p>金额: {alert.amount} 元</p>
    <p>到期日期: {alert.dueDate}</p>
    <button onClick={() => onEdit(alert)}>编辑</button>
    <button onClick={() => onDelete(alert.id)}>删除</button>
  </div>
);

const Alerts = () => {
  const [alerts, setAlerts] = useState([
    { id: 1, title: '电费', amount: '200', dueDate: '2024-08-10' },
    { id: 2, title: '网费', amount: '100', dueDate: '2024-08-15' },
  ]);

  const handleEdit = (alert) => {
    // 编辑提醒逻辑
  };

  const handleDelete = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  return (
    <div className="alerts-container">
      <h2>账单提醒</h2>
      <button className="add-alert-btn">添加提醒</button>
      <div className="alert-list">
        {alerts.map(alert => (
          <AlertCard
            key={alert.id}
            alert={alert}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Alerts;
