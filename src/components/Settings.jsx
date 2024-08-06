import React, { useState } from 'react';
import '../styles/Settings.css'; // 引入自定义CSS

const Settings = () => {
  const [theme, setTheme] = useState('light');
  const [currency, setCurrency] = useState('CNY');
  const [dateFormat, setDateFormat] = useState('YYYY-MM-DD');

  const handleSave = () => {
    // 保存设置逻辑
    alert('设置已保存');
  };

  return (
    <div className="settings-container">
      <h2>设置</h2>
      <div className="settings-section">
        <h3>主题</h3>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">浅色</option>
          <option value="dark">深色</option>
        </select>
      </div>
      <div className="settings-section">
        <h3>货币单位</h3>
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          <option value="CNY">人民币 (CNY)</option>
          <option value="USD">美元 (USD)</option>
          {/* 添加其他货币单位 */}
        </select>
      </div>
      <div className="settings-section">
        <h3>日期格式</h3>
        <select value={dateFormat} onChange={e => setDateFormat(e.target.value)}>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          <option value="DD-MM-YYYY">DD-MM-YYYY</option>
        </select>
      </div>
      <button className="save-btn" onClick={handleSave}>保存设置</button>
    </div>
  );
};

export default Settings;
