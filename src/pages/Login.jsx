import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // TODO: connect to real auth
    navigate("/");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <span className="brand">
            Minimal <span className="shop">Shop</span>ping
          </span>
        </div>

        <h2 className="login-title">Welcome back</h2>
        <p className="login-sub">Sign in to your account</p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <p className="login-footer">
          Don't have an account?{" "}
          <span className="login-link" onClick={() => navigate("/")}>
            Shop as guest
          </span>
        </p>
      </div>
    </div>
  );
}