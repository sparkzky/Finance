import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accounts from './components/Accounts';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import Budget from './components/Budget';
import Alerts from './components/Alerts';
import Settings from './components/Settings';
import Goals from './components/Goals';
import './styles/App.css'; // 引入自定义CSS

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <h1>个人财务管理</h1>
          <nav className="app-nav">
            <Link to="/accounts">账户管理</Link>
            <Link to="/transactions">交易记录</Link>
            <Link to="/reports">财务报表</Link>
            <Link to="/budget">预算管理</Link>
            <Link to="/alerts">账单提醒</Link>
            <Link to="/settings">设置</Link>
            <Link to="/goals">财务目标</Link>
          </nav>
        </header>
        {/* <aside className="app-sidebar">
          <ul>
            <li><Link to="/accounts">账户管理</Link></li>
            <li><Link to="/transactions">交易记录</Link></li>
            <li><Link to="/reports">财务报表</Link></li>
            <li><Link to="/budget">预算管理</Link></li>
            <li><Link to="/alerts">账单提醒</Link></li>
            <li><Link to="/settings">设置</Link></li>
            <li><Link to="/goals">财务目标</Link></li>
          </ul>
        </aside> */}
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
