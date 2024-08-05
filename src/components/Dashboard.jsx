import React from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return (
      <div className="dashboard">
        <header className="header">
          <h1>Personal Finance</h1>
        </header>
        <main className="content">
          <section className="balance">
            <h2>Account Balance</h2>
            <p>$5,000.00</p>
          </section>
          <section className="transactions">
            <h2>Recent Transactions</h2>
            <ul>
              <li>Starbucks - $5.00</li>
              <li>Amazon - $50.00</li>
              <li>Rent - $1,200.00</li>
            </ul>
          </section>
        </main>
      </div>
    );
  };
  
  export default Dashboard;