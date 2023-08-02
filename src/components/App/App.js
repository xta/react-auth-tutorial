import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import useToken from './useToken'

import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  const { token, clear, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <h1><Link to='/'>Home</Link></h1>
        <Link to='/dashboard'>Dashboard</Link> |&nbsp;
        <Link to='/preferences'>Preferences</Link>

        {(token && <Logout clear={clear} />)}

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