import React, { useState } from "react";
import "../styles/Accounts.css"; // 引入自定义CSS

const AccountCard = ({ account, onDelete, onBalanceChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newBalance, setNewBalance] = useState(account.balance);

  const handleEdit = () => {
    setIsEditing(true);
    setNewBalance(account.balance);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onBalanceChange(account.id, newBalance);
  };

  const handleBalanceChange = (e) => {
    setNewBalance(e.target.value);
  };

  return (
    <div className="account-card">
      <h3>{account.name}</h3>
      <div>
        {isEditing ? (
          <input
            type="text"
            value={newBalance}
            onChange={handleBalanceChange}
            onBlur={handleBlur}
          />
        ) : (
          <p>余额: {account.balance} 元</p>
        )}
      </div>
      <button onClick={handleEdit}>编辑</button>
      <button onClick={() => onDelete(account.id)}>删除</button>
    </div>
  );
};
const Accounts = () => {
  const [accounts, setAccounts] = useState([
    { id: 1, name: "银行账户", balance: "5000" },
    { id: 2, name: "现金", balance: "3600" },
    { id: 3, name: "现金", balance: "3600" },
    { id: 4, name: "信用卡", balance: "10000" },
    { id: 5, name: "债券", balance: "100000" },
    { id: 6, name: "股票", balance: "1000000" },
  ]);
  const [newAccountId, setNewAccountId] = useState(3);
  const [newAccountName, setNewAccountName] = useState("");
  const [newAccountBalance, setNewAccountBalance] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddAccount = () => {
    if (newAccountName.trim() !== "" && newAccountBalance.trim() != "") {
      const newAccount = {
        id: newAccountId,
        name: newAccountName,
        balance: newAccountBalance,
      };
      setAccounts([...accounts, newAccount]);
      setNewAccountId(newAccountId + 1);
      setNewAccountName("");
      setNewAccountBalance("");
    }
    setIsAdding(false);
  };

  const handleBalanceChange = (accountId, newBalance) => {
    const updateAccounts = accounts.map((account) =>
      account.id === accountId ? { ...account, balance: newBalance } : account
    );
    setAccounts(updateAccounts);
  };

  const handleDelete = (id) => {
    setAccounts(accounts.filter((account) => account.id !== id));
  };

  const handleAddAccountClick = () => {
    setIsAdding(true);
  };

  return (
    <div className="accounts-container">
      <h2>账户管理</h2>
      {isAdding ? (
        <div>
          <input
            type="text"
            placeholder="请输入账户名称"
            value={newAccountName}
            onChange={(e) => setNewAccountName(e.target.value)}
          />
          <input
            type="text"
            placeholder="账户余额"
            value={newAccountBalance}
            onChange={(e) => setNewAccountBalance(e.target.value)}
          />
          <button className="add-account-btn" onClick={handleAddAccount}>保存账户</button>
          <button className="add-account-btn" onClick={() => setIsAdding(false)}>取消</button>
        </div>
      ) : (
        <button className="add-account-btn" onClick={handleAddAccountClick}>
          添加账户
        </button>
      )}
      <div className="account-list">
        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
            onDelete={handleDelete}
            onBalanceChange={handleBalanceChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Accounts;
