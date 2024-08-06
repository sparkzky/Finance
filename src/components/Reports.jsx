import React from 'react';
import '../styles/Reports.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1月', income: 4000, expense: 2400 },
  { name: '2月', income: 3000, expense: 1398 },
  { name: '3月', income: 2000, expense: 9800 },
  // ...更多数据
];

const Reports = () => {
  return (
    <div className="reports-container">
      <h2>财务报表</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="income" stroke="#8884d8" />
          <Line type="monotone" dataKey="expense" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Reports;
