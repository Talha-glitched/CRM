import React, { useState } from "react";
import "./signup.css"; // Import the CSS file (you can reuse Login.css or create a new one)
import { Link } from "react-router-dom";

const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className="signup-wrapper">
            <div className="signup-container">
                <h1>Sign Up</h1>
                <p>
                    Already have an account? <Link to="/Login">Log in</Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
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
                        <input type="checkbox" id="terms" name="terms" required />
                        <label htmlFor="terms">
                            I agree to the <a href="#">Terms of Service</a> and{" "}
                            <a href="#">Privacy Policy</a>.
                        </label>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>

            </div>
        </div>
    );
};

export default Signup;