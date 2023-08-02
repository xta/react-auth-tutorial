import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import useToken from './useToken'

import Login from '../Login/Login';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <h1><Link to='/'>Home</Link></h1>
        <Link to='/dashboard'>Dashboard</Link> |&nbsp;
        <Link to='/preferences'>Preferences</Link>

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