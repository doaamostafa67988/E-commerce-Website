import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify({
        username: email, 
        password: password, 
      })
    })
    .then(res => {
      return res.json().then(data => {
        if (res.ok) return data;
        throw new Error(data.message || 'Invalid Credentials');
      });
    })
    .then(data => {
      alert(`Login Successful! Welcome ${data.firstName}`);
    })
    .catch(err => {
      alert('Login Failed: ' + err.message);
    });
  };

  return (
    <div className="login-page">
      <header className="nav-bar">
        <div className="brand">
          <span className="brand-icon">🛍️</span>
          <span className="brand-name">Minimal Shopping</span>
        </div>
        <div className="user-icon">👤</div>
      </header>

      <div className="login-wrapper">
        <div className="header-text">
          <h1>Hello Again!</h1>
          <p>Welcome Back You've Been Missed!</p>
        </div>

        <form className="form-container" onSubmit={handleLogin}>
          <p className="hint">To login enter Your email address and password</p>
          <div className="input-field">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span className="orange-eye">👁️</span>
            </div>
          </div>
          <div className="input-field">
            <label>Password</label>
            <div className="input-wrapper">
              <input 
                type={showPassword ? "text" : "password"} 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span 
                className="orange-eye" 
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                👁️
              </span>
            </div>
          </div>
          <div className="remember-me">
            <input type="checkbox" id="rem" />
            <label htmlFor="rem">Remember me</label>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default App; 