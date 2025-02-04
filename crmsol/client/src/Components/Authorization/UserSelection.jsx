import React from 'react';
import './userSelection.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { FaUser, FaUserTie, FaUserShield } from 'react-icons/fa'; // Import icons from Font Awesome
import Navbar from '../LandingPage/Navbar';
import Footer from "../LandingPage/Footer";

const UserSelection = () => {
    return (

        <div className="page-container">
            <Navbar />
            <div className='user-selection-wrapper'>
                <div className="user-type-container">
                    <h1 className="app-title">myCRM</h1>
                    <h1>Select User Type</h1>
                    <p className="subtitle">Select your type of user</p>
                    <div className="user-options">
                        <div className="user-card rookie">
                            <FaUser className="user-icon" />
                            <h2>Employee</h2>
                            <Link to="/Login" className="select-btn">Login</Link>
                        </div>
                        <div className="user-card starter">
                            <FaUserTie className="user-icon" />
                            <h2>Manager</h2>
                            <Link to="/Login" className="select-btn">Login</Link>
                        </div>
                        <div className="user-card all-star">
                            <FaUserShield className="user-icon" />
                            <h2>Admin</h2>
                            <Link to="/Login" className="select-btn">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserSelection;