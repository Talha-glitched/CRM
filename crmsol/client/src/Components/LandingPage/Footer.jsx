import React from "react";
import "./footer.css"; // Import the CSS file
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"; // React Icons for social media

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Title Section */}
        <div className="footer-title">
          <h1>myCRM</h1>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="icon" />
          </a>
        </div>

        {/* CRM Features in Cards */}
        <div className="features-section">
          <h2>Main Features of CRM</h2>
          <div className="cards-container">
            {/* Card 1: Contact Management */}

            <div className="card">
              <h3>Lead Generation</h3>
              <p>
                Generate leads from social media ad compaigns.
              </p>
            </div>

            <div className="card">
              <h3>Project Management</h3>
              <p>
                Manage your projects just like notion project management.
              </p>
            </div>

            <div className="card">
              <h3>Centralized Data</h3>
              <p>
                Organize and manage all your customer contacts in one place.
              </p>
            </div>

            {/* Card 2: Lead Tracking */}
            <div className="card">
              <h3>Lead Tracking</h3>
              <p>
                Track and manage leads throughout the sales pipeline.
              </p>
            </div>

            {/* Card 3: Sales Automation */}
            <div className="card">
              <h3>Task Automation</h3>
              <p>
                Automate repetitive sales tasks to save time and increase
                efficiency.
              </p>
            </div>

            {/* Card 4: Analytics */}
            <div className="card">
              <h3>Analytics</h3>
              <p>
                Get insights into your sales performance with detailed reports.
              </p>
            </div>

            
          </div>
        </div>

        {/* Copyright Section */}
        <div className="copyright-section">
          <p>© 2025 myCRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;