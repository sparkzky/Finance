import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import Budget from './components/Budget';
import Alerts from './components/Alerts';
import Settings from './components/Settings';
import Goals from './components/Goals';
import './styles/App.css'; 
import { FaUser, FaMoneyBill, FaChartLine, FaCalendar, FaBell, FaCog, FaBullseye } from 'react-icons/fa';
import { invoke } from '@tauri-apps/api/tauri';

const App = () => {
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
  const greet = async (name) => {
    try {
      const info = await invoke('greet', { name });
      setInfo(info)
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <Router>
      <div className="app-container">
        {/* <button onClick={fetchInfoFromBackend}>获取信息</button>
        <input type="text" placeholder="请输入姓名" onChange={(e) => greet(e.target.value)}></input> */}
        <header className="app-header">
          <h1>个人财务管理{info}</h1>
          <nav className="app-nav">
            <Link to="/accounts"><FaUser className="icon" /> 账户管理</Link>
            <Link to="/transactions"><FaMoneyBill className="icon" /> 交易记录</Link>
            <Link to="/reports"><FaChartLine className="icon" /> 财务报表</Link>
            <Link to="/budget"><FaCalendar className="icon" /> 预算管理</Link>
            <Link to="/alerts"><FaBell className="icon" /> 账单提醒</Link>
            <Link to="/settings"><FaCog className="icon" /> 设置</Link>
            <Link to="/goals"><FaBullseye className="icon" /> 财务目标</Link>
          </nav>
        </header>
        <main className="app-main">
          <Routes>
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/" element={<Accounts />} /> {/* 默认页面 */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
