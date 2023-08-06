import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import './App.css';

import Header from '../Layout/Header'
import Home from '../Home/Home'
import Login from '../Login/Login';
import { Dashboard } from '../Dashboard/Dashboard';
import { Preferences } from '../Preferences/Preferences';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/preferences" element={<Preferences />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;