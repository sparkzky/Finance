import React from 'react';
import '../styles/Transactions.css';

const Transactions = () => {
  return (
    <div className="transactions-container">
      <h2>Recent Transactions</h2>
      <ul className="transaction-list">
        <li>Starbucks - $5.00</li>
        <li>Amazon - $50.00</li>
        <li>Rent - $1,200.00</li>
        <li>Groceries - $100.00</li>
      </ul>
    </div>
  );
};

export default Transactions;
