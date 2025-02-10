import React from 'react';
import './Leads.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Leads = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
    <div className="leads-page">
      <h1>Leads Management</h1>
      <div className="leads-content">
        <div className="leads-filters">
          <input type="text" placeholder="Search leads..." className="search-input" />
          <select className="filter-select">
            <option value="">All Status</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="lost">Lost</option>
          </select>
        </div>
        <div className="leads-table">
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
                <td>John Smith</td>
                <td>Tech Corp</td>
                <td>john@techcorp.com</td>
                <td>(555) 123-4567</td>
                <td><span className="status-badge new">New</span></td>
                <td>
                  <button className="action-btn">Edit</button>
                  <button className="action-btn">Delete</button>
                </td>
              </tr>
              {/* Add more dummy data as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Leads;