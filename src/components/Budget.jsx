import React, { useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "../styles/Budget.css"; // 引入自定义CSS
import { show } from "@tauri-apps/api/app";

const Budget = () => {
  const [budget, setBudget] = useState(1000);
  const [spent, setSpent] = useState(400);
  const [showInput, setShowInput] = useState(false);
  const [newBudget, setNewBudget] = useState("");

  const handleSetBudget = () => {
    if (showInput) {
      if (newBudget && !isNaN(newBudget)) {
        setBudget(Number(newBudget));
        setNewBudget("");
      }
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  };

  const data = [
    { name: "已使用", value: spent },
    { name: "剩余", value: budget - spent },
  ];

  return (
    <div className="budget-container">
      <h2>预算管理</h2>
      <div className="budget-summary">
        <h3>总预算: {budget} 元</h3>
        <h4>已使用: {spent} 元</h4>
        {!showInput && <button onClick={handleSetBudget}>设置预算</button>}
        {showInput && (
          <div className="budget-input_container">
            <input
              type="number"
              value={newBudget}
              onChange={(e) => setNewBudget(e.target.value)}
              placeholder="请输入新的预算"
            />
            <button onClick={handleSetBudget}>保存预算</button>
          </div>
        )}
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={index === 0 ? "#ff7300" : "#00c49f"}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Budget;
