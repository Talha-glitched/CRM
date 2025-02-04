import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../services/api'; // Import the login function

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // For programmatic navigation

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        try {
            const credentials = { email, password };
            const response = await loginUser(credentials);

         /*   if (response.role !== "user") { // 🚩 Check user role
                setError("Access denied: Unauthorized role.");
                return;
            }*/

            // Store token/user info if needed (localStorage/sessionStorage)
            localStorage.setItem("user", JSON.stringify(response));

            navigate("/Dashboard"); // Redirect on successful login
        } catch (err) {
            console.error(err);
            setError(err.message || "Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h1>Login</h1>
                <p>Don't have an account? <Link to="/Signup">Get started free</Link></p>

                {error && <div className="error-message">{error}</div>} {/* Error Display */}

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

                    <button type="submit" className="login-button">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
