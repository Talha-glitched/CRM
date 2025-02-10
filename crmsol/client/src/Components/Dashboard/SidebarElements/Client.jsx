import React from 'react';
import './Client.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Client = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
  
    <div className="client-page">
      <h1>Client Management</h1>
      <div className="client-content">
        <div className="client-filters">
          <input type="text" placeholder="Search clients..." className="search-input" />
          <select className="filter-select">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="client-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sarah Johnson</td>
                <td>Tech Solutions Inc</td>
                <td>sarah@techsolutions.com</td>
                <td>(555) 234-5678</td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn">View</button>
                </td>
              </tr>
              <tr>
                <td>Michael Brown</td>
                <td>Digital Dynamics</td>
                <td>michael@digitaldynamics.com</td>
                <td>(555) 345-6789</td>
                <td><span className="status-badge active">Active</span></td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Client;