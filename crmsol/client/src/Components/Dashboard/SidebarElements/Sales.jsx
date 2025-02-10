import React from 'react';
import './Sales.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Sales = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
    <div className="sales-page">
      <h1>Sales Dashboard</h1>
      <div className="sales-content">
        <div className="sales-summary">
          <div className="summary-card">
            <h3>Total Sales</h3>
            <p className="amount">$124,500</p>
            <p className="period">This Month</p>
          </div>
          <div className="summary-card">
            <h3>Revenue</h3>
            <p className="amount">$98,240</p>
            <p className="period">This Month</p>
          </div>
          <div className="summary-card">
            <h3>Pending Deals</h3>
            <p className="amount">15</p>
            <p className="period">Active</p>
          </div>
        </div>
        <div className="sales-chart">
          <h2>Sales Performance</h2>
          {/* Chart component will be added here */}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Sales;