import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import './App.css';
import Login from "./Components/Authorization/Login";
import UserSelection from './Components/Authorization/UserSelection';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Signup from './Components/Authorization/Signup';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path='/Dashboard' element={<Dashboard/>} />
      </Routes>
    </>
  )
}

export default App
