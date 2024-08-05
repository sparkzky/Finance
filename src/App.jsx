// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import { invoke } from "@tauri-apps/api/tauri";
// import "./styles/App.css";



// function App() {
//   const [greetMsg, setGreetMsg] = useState("");
//   const [name, setName] = useState("");

//   async function greet() {
//     // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//     setGreetMsg(await invoke("greet", { name }));
//   }

//   return (
//     <div className="container">
//       <h1>Welcome to Tauri!</h1>

//       <div className="row">
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo vite" alt="Vite logo" />
//         </a>
//         <a href="https://tauri.app" target="_blank">
//           <img src="/tauri.svg" className="logo tauri" alt="Tauri logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>

//       <p>Click on the Tauri, Vite, and React logos to learn more.</p>

//       <form
//         className="row"
//         onSubmit={(e) => {
//           e.preventDefault();
//           greet();
//         }}
//       >
//         <input
//           id="greet-input"
//           onChange={(e) => setName(e.currentTarget.value)}
//           placeholder="Enter a name..."
//         />
//         <button type="submit">Greet</button>
//       </form>

//       <p>{greetMsg}</p>
//     </div>
//   );
// }


import React, { useState } from 'react';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Overview from './components/Overview';
import Transactions from './components/Transactions';
import Reports from './components/Reports';
import Settings from './components/Settings';
import './styles/App.css';
import { invoke } from '@tauri-apps/api';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleLogin = (username) => {
    setCurrentUser(username);
    setLoggedIn(true);
  };

  const renderAppContent = () => {
    if (!loggedIn) {
      return <Login onLogin={handleLogin} />;
    }

    return (
      <>
        <Sidebar />
        <div className="main-content">
          <Overview />
          {/* Add other components/routes based on application flow */}
        </div>
      </>
    );
  };

  return <div className="app">{renderAppContent()}</div>;
};

export default App;
