import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCircle, UserPlus, ClipboardList, LogOut } from 'lucide-react';
import './DNavbar.css';

const DNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout logic here (e.g., clearing tokens, etc.)
    navigate('/');
  };

  return (
    <nav className="custom-navbar">
      <div className="custom-navbar-brand">
        <h1>myCRM</h1>
      </div>
      <div className="custom-navbar-actions">
        <Link to="/employee" className="custom-action-btn">
          <UserPlus size={20} />
          <span>Add Employee</span>
        </Link>
        <Link to="/todo-tasks" className="custom-action-btn">
          <ClipboardList size={20} />
          <span>Add Task</span>
        </Link>
        <div className="custom-user-info" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <UserCircle size={24} />
          <span>Admin</span>
          {isDropdownOpen && (
            <div className="custom-dropdown">
              <div className="custom-dropdown-item" onClick={handleLogout}>
                <LogOut size={16} />
                <span>Logout</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DNavbar;