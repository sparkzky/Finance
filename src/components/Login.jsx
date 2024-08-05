import React from 'react';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
    // 模拟直接登录动作
    const handleLogin = () => {
      onLogin('Guest'); // 假设直接登录为游客用户
    };
  
    return (
      <div className="login-container">
        <h2>我真的是服了</h2>
        <button onClick={handleLogin}>去死吧</button>
      </div>
    );
  };
  
  export default Login;