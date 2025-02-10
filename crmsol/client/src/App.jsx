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
import DashboardLanding from './Components/Dashboard/DashboardLanding';
import Leads from './Components/Dashboard/SidebarElements/Leads';
import TodoTasks from './Components/Dashboard/SidebarElements/ToDoTasks';
import Client from './Components/Dashboard/SidebarElements/Client';
import Employee from './Components/Dashboard/SidebarElements/Employee';
import Sales from './Components/Dashboard/SidebarElements/Sales';
import Transcript from './Components/Dashboard/SidebarElements/Transcript';
import Cashbook from './Components/Dashboard/SidebarElements/Cashbook';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/UserSelection" element={<UserSelection />} />
        <Route path='/Dashboard' element={<DashboardLanding/>} />
        <Route path="/leads" element={<Leads />} />
      <Route path="/todo-tasks" element={<TodoTasks />} />
      <Route path="/client" element={<Client />} />
      <Route path="/employee" element={<Employee />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/transcript" element={<Transcript />} />
      <Route path="/cashbook" element={<Cashbook/>} />
      </Routes>
    </>
  )
}

export default App
