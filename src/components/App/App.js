import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import './App.css';

import Header from '../Layout/Header'
import Home from '../Home/Home'
import Login from '../Login/Login';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  const [loggedIn, setLoggedIn] = useState();

  return (
    <div className="container">
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;