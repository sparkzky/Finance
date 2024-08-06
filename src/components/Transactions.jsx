import React , { useState } from 'react';
import '../styles/Transactions.css';

const TransactionTable = ({ transactions }) => (
  <table className="transaction-table">
    <thead>
      <tr>
        <th>日期</th>
        <th>类别</th>
        <th>金额</th>
        <th>备注</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((transaction, index) => (
        <tr key={index}>
          <td>{transaction.date}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount} 元</td>
          <td>{transaction.note}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { date: '2024-08-01', category: '收入', amount: '2000', note: '工资' },
    { date: '2024-08-03', category: '支出', amount: '150', note: '餐饮' },
  ]);

  return (
    <div className="transactions-container">
      <h2>交易记录</h2>
      <div className="filter-container">
        <input type="text" placeholder="搜索交易记录" />
        <button>过滤</button>
      </div>
      <TransactionTable transactions={transactions} />
    </div>
  );
};

export default Transactions;