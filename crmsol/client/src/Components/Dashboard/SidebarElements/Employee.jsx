import React from 'react';
import './Employee.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Employee = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
  
    <div className="employee-page">
      <h1>Employee Management</h1>
      <div className="employee-content">
        <p>Employee management component coming soon...</p>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Employee;