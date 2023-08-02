import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../Login/Login';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
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