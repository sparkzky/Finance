import React, { useState } from "react";
import "../styles/Accounts.css"; // 引入自定义CSS

const AccountCard = ({ account, onEdit, onDelete }) => (
  <div className="account-card">
    <h3>{account.name}</h3>
    <p>余额: {account.balance} 元</p>
    <button onClick={() => onEdit(account)}>编辑</button>
    <button onClick={() => onDelete(account.id)}>删除</button>
  </div>
);

const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "银行账户", balance: "5000" },
    { id: 2, name: "现金", balance: "3600" },
  ]);

  const handleEdit = (account) => {
    // 编辑账户的信息
    account.name = "新账户名称";
    setAccounts([...accounts]);
  };

  const handleDelete = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  return (
    <div className="accounts-container">
      <h2>账户管理</h2>
      <button className="add-account-btn" onClick={()=>{}}>添加账户</button>
      <div className="account-list">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
