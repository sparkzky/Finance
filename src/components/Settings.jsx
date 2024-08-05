import React from 'react';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h2>Settings</h2>
      <form className="settings-form">
        <label>Theme:</label>
        <select>
          <option>Light</option>
          <option>Dark</option>
        </select>
        <label>Currency:</label>
        <select>
          <option>USD</option>
          <option>EUR</option>
          <option>GBP</option>
        </select>
        <button>Save</button>
      </form>
    </div>
  );
};

export default Settings;
