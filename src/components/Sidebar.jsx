import '../styles/Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
      <div className="sidebar">
        <h2 className="sidebar-title">Finance App</h2>
        <ul className="sidebar-menu">
          <li className="menu-item">Dashboard</li>
          <li className="menu-item">Reports</li>
          <li className="menu-item">Settings</li>
        </ul>
      </div>
    );
  };
  
  export default Sidebar;