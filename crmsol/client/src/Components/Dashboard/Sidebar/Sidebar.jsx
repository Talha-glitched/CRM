import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  CheckSquare,
  UserCircle,
  DollarSign,
  FileText,
  Wallet,
  Target,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({ users: false });

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/leads" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Target size={20} />
          <span>Leads</span>
        </NavLink>

        <NavLink to="/todo-tasks" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <CheckSquare size={20} />
          <span>To Do Tasks</span>
        </NavLink>

        {/* Users Dropdown */}
        <div className="nav-group">
          <button className="nav-item dropdown-btn" onClick={() => toggleMenu('users')}>
            <Users size={20} />
            <span>Users</span>
            {openMenus.users ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
          </button>
          {openMenus.users && (
            <div className="sub-menu">
              <NavLink to="/client" className={({ isActive }) => `nav-item sub-item ${isActive ? 'active' : ''}`}>
                <UserCircle size={16} />
                <span>Client</span>
              </NavLink>
              <NavLink to="/employee" className={({ isActive }) => `nav-item sub-item ${isActive ? 'active' : ''}`}>
                <Users size={16} />
                <span>Employee</span>
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/sales" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <DollarSign size={20} />
          <span>Sales</span>
        </NavLink>

        <NavLink to="/transcript" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FileText size={20} />
          <span>Transcript</span>
        </NavLink>

        <NavLink to="/cashbook" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Wallet size={20} />
          <span>Cashbook</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
