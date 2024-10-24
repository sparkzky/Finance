import React, { useState } from "react";
import "../styles/Transactions.css";

const TransactionTable = ({
  transactions,
  filterText,
  showIncome,
  showExpense,
}) => {
  const filteredTransactions = transactions.filter(
    (transaction) =>
      (showIncome && showExpense
        ? true
        : showIncome
        ? transaction.category === "收入"
        : showExpense
        ? transaction.category === "支出"
        : false) &&
      (transaction.date.toLowerCase().includes(filterText.toLowerCase()) ||
        transaction.category.toLowerCase().includes(filterText.toLowerCase()) ||
        transaction.note.toLowerCase().includes(filterText.toLowerCase()))
  );
  return (
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
        {filteredTransactions.map((transaction, index) => (
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
};

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { date: "2024-08-01", category: "收入", amount: "2000", note: "工资" },
    { date: "2024-08-03", category: "支出", amount: "150", note: "餐饮" },
    { date: "2024-08-05", category: "收入", amount: "3000", note: "奖金" },
    { date: "2024-08-07", category: "支出", amount: "500", note: "购物" },
    { date: "2024-08-09", category: "收入", amount: "1000", note: "理财" },
    { date: "2024-08-11", category: "支出", amount: "200", note: "水电费" },
    { date: "2024-08-13", category: "收入", amount: "5000", note: "股票" },
    { date: "2024-08-15", category: "支出", amount: "100", note: "借款" },
  ]);
  const [filterText, setFilterText] = useState("");
  const [showIncome, setShowIncome] = useState(true); // 默认显示收入
  const [showExpense, setShowExpense] = useState(true); // 默认不显示支出

  const handleFilter = () => {
    // 这里可以添加额外的过滤逻辑，例如按日期范围过滤
    setTransactions(
      transactions.filter((transaction) => transaction.amount > 1000)
    );
  };

  const handleIncome = () => {
    setShowIncome(true);
    setShowExpense(false);
  };

  const handleExpense = () => {
    setShowIncome(false);
    setShowExpense(true);
  };

  const handleAll = () => {
    setShowIncome(true);
    setShowExpense(true);
  };

  return (
    <div className="transactions-container">
      <h2>交易记录</h2>
      <div className="filter-container">
        <input
          type="text"
          placeholder="搜索交易记录"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />
        <button onClick={handleIncome}>只看收入</button>
        <button onClick={handleExpense}>只看支出</button>
        <button onClick={handleAll}>全部</button>
      </div>
      <TransactionTable
        transactions={transactions}
        filterText={filterText}
        showIncome={showIncome}
        showExpense={showExpense}
      />
    </div>
  );
};

export default Transactions;
