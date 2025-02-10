import React from 'react';
import './Cashbook.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Cashbook = () => {
  return (
    <div className="app">
      <DNavbar />
      <div className="main-container">
        <Sidebar />
        <div className="cashbook-page">
          <h1>Cashbook</h1>
          <div className="cashbook-content">
            <div className="cashbook-summary">
              <div className="summary-card income">
                <h3>Total Income</h3>
                <p className="amount">$45,250</p>
                <p className="period">This Month</p>
              </div>
              <div className="summary-card expenses">
                <h3>Total Expenses</h3>
                <p className="amount">$32,180</p>
                <p className="period">This Month</p>
              </div>
              <div className="summary-card balance">
                <h3>Balance</h3>
                <p className="amount">$13,070</p>
                <p className="period">Current</p>
              </div>
            </div>
            <div className="transaction-list">
              <h2>Recent Transactions</h2>
              <div className="transaction-item">
                <div className="transaction-info">
                  <p className="transaction-title">Office Supplies</p>
                  <p className="transaction-date">March 15, 2024</p>
                </div>
                <p className="transaction-amount expense">-$250.00</p>
              </div>
              <div className="transaction-item">
                <div className="transaction-info">
                  <p className="transaction-title">Client Payment - ABC Corp</p>
                  <p className="transaction-date">March 14, 2024</p>
                </div>
                <p className="transaction-amount income">+$5,000.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cashbook;