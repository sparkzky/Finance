import React, { useState } from 'react';
import '../styles/Alerts.css'; // 引入自定义CSS
import { Portal } from 'react-portal';


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
    { id: 3, title: '水费', amount: '100', dueDate: '2024-08-15' },
    { id: 4, title: '煤气费', amount: '50', dueDate: '2024-08-15' },
    { id: 5, title: '电话费', amount: '100', dueDate: '2024-08-15' },
    { id: 6, title: '房租', amount: '1000', dueDate: '2024-08-15' },
  ]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAlert, setEditingAlert] = useState(null);

  const handleEdit = (alert) => {
    // 编辑提醒逻辑
    setIsEditing(true);
    setEditingAlert(alert);
  };

  const handleClose = () => {
    setIsEditing(false);
    setEditingAlert(null);
  }

  const handleSave = () => {
    // 更新原始提醒数组中的值
    setAlerts(alerts.map(alert =>
      alert.id === editingAlert.id ? editingAlert : alert
    ));
    handleClose();
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
      {isEditing && (
        <Portal>
          <div className="edit-modal-container">
            <div className="edit-modal">
              <h3>编辑提醒</h3>
              <input
                type="text"
                value={editingAlert?.title}
                onChange={(e) => setEditingAlert({ ...editingAlert, title: e.target.value })}
                placeholder="名称"
              />
              <input
                type="number"
                value={editingAlert?.amount}
                onChange={(e) => setEditingAlert({ ...editingAlert, amount: e.target.value })}
                placeholder="金额"
              />
              <input
                type="date"
                value={editingAlert?.dueDate}
                onChange={(e) => setEditingAlert({ ...editingAlert, dueDate: e.target.value })}
                placeholder="截止日期"
              />
              <button onClick={handleSave}>完成</button>
            </div>
            <div className="edit-backdrop" />
          </div>
        </Portal>
      )}
    </div>
  );
};

export default Alerts;
