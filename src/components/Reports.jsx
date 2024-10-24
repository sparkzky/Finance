import React from 'react';
import '../styles/Reports.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { invoke } from '@tauri-apps/api/tauri';



const data = [
  { name: '1月', income: 4000, expense: 2400 },
  { name: '2月', income: 3000, expense: 1398 },
  { name: '3月', income: 2000, expense: 320 },
  { name: '4月', income: 1000, expense: 95400 },
  { name: '5月', income: 6000, expense: 93200 },
  { name: '6月', income: 2000, expense: 2200 },
  { name: '7月', income: 8000, expense: 20432 },
  { name: '8月', income: 3000, expense: 223220 },

  // ...更多数据
];

const Reports = () => {
  const [info, setInfo] = React.useState('');
  const fetchInfoFromBackend = async () => {
    try {
      const info = await invoke('fuck');
      setInfo(info)
    }
    catch (e) {
      console.error(e)
    }
  }
  fetchInfoFromBackend()
  return (
    <div className="reports-container">
      <h2>财务报表 {info}</h2>
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
