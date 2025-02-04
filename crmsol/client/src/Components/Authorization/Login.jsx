import React, { useState } from "react";
import "./login.css"; // Import the CSS file
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1>Login</h1>
                <p>Don't have an account? <Link to="/Signup">Get started free</Link></p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="show-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide Password" : "Show Password"}
                        </span>
                    </div>
                    <div className="form-group">
                        <input type="checkbox" id="remember" name="remember" />
                        <label htmlFor="remember">Remember me</label>
                        <a href="#" className="forgot-password">Forgot my password?</a>
                    </div>
                    <Link to="/Dashboard" className="login-button">Log in</Link>
                </form>
            </div>
        </div>
    );
};

export default Login;