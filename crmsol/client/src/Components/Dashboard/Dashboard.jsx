import React from 'react';
import Calendar from './Calender/Calendar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Sales</h3>
          <p className="stat">$24,500</p>
        </div>
        <div className="dashboard-card">
          <h3>Active Leads</h3>
          <p className="stat">45</p>
        </div>
        <div className="dashboard-card">
          <h3>Pending Tasks</h3>
          <p className="stat">12</p>
        </div>
        <div className="dashboard-card">
          <h3>Total Employees</h3>
          <p className="stat">28</p>
        </div>
      </div>
      <div className="calendar-section">
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;