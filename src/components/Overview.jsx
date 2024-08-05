import React from 'react';
import '../styles/Overview.css';

const Overview = () => {
  return (
    <div className="overview-container">
      <h2>Account Overview</h2>
      <p>Total Balance: $10,000.00</p>
      <p>Income: $5,000.00</p>
      <p>Expenses: $3,000.00</p>
    </div>
  );
};

export default Overview;
