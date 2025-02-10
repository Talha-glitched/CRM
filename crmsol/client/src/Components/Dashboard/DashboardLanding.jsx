import React from 'react';
import DNavbar from './Navbar/DNavbar';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard';
import './DashboardLanding.css';

const DashboardLanding = () => {
  return (
    <div className="app">
      <DNavbar/>
      <div className="main-container">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
};

export default DashboardLanding;