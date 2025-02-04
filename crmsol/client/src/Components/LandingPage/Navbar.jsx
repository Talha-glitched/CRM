import React, { useState } from 'react';
import './navbar.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Import for navigation and location
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate(); // Initialize navigation
  const location = useLocation(); // Get current location

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // Check if the current route is "/UserSelection"
  const isUserSelectionPage = location.pathname === '/UserSelection';

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand" href="#">myCRM</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <div className={`search-container ${showSearch ? 'active' : ''}`}>
          <button className="search-icon" onClick={toggleSearch}>
            <i className="fas fa-search"></i>
          </button>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>

        {/* Conditionally render the Login button */}
        {!isUserSelectionPage && (
          <Link to="/UserSelection" className="login-btn">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;