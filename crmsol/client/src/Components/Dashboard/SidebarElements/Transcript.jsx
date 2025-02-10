import React from 'react';
import './Transcript.css';
import DNavbar from '../Navbar/DNavbar';
import Sidebar from '../Sidebar/Sidebar';

const Transcript = () => {
  return (
    <div className="app">
    <DNavbar />
    <div className="main-container">
      <Sidebar />
    <div className="transcript-page">
      <h1>Transcripts</h1>
      <div className="transcript-content">
        <div className="transcript-filters">
          <input type="text" placeholder="Search transcripts..." className="search-input" />
          <select className="filter-select">
            <option value="">All Types</option>
            <option value="meeting">Meeting</option>
            <option value="call">Call</option>
            <option value="interview">Interview</option>
          </select>
        </div>
        <div className="transcript-list">
          <div className="transcript-item">
            <div className="transcript-header">
              <h3>Client Meeting - Acme Corp</h3>
              <span className="transcript-type meeting">Meeting</span>
            </div>
            <p className="transcript-date">March 15, 2024</p>
            <p className="transcript-preview">Discussion about new project requirements and timeline...</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Transcript;