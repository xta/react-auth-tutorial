import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import useToken from './useToken'

import Login from '../Login/Login';
import LoginButton from '../Login/Button';
import Logout from '../Logout/Logout';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  const { token, clear, setToken } = useToken()
  const [showLogin, setShowLogin] = useState(false)

  const toggleShowLogin = () => setShowLogin(!showLogin)
  const loginToAccount = token => {
    setToken(token)
    setShowLogin(false)
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <h1><Link to='/'>Home</Link></h1>
        <Link to='/dashboard'>Dashboard</Link> |&nbsp;
        <Link to='/preferences'>Preferences</Link>&nbsp;

        {(!token && <LoginButton onPress={toggleShowLogin} />)}
        {(token && <Logout clear={clear} />)}

        {showLogin && !token && (<Login setToken={loginToAccount} />)}

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
          </Route>

          <Route path="/preferences" element={<Preferences />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;