// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logo.svg";

// export default function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // TODO: connect to real auth
//     navigate("/");
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <div className="login-logo" onClick={() => navigate("/")}>
//           <img src={logo} alt="logo" />
//           <span className="brand">
//             Minimal <span className="shop">Shop</span>ping
//           </span>
//         </div>

//         <h2 className="login-title">Welcome back</h2>
//         <p className="login-sub">Sign in to your account</p>

//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit" className="login-btn">Sign In</button>
//         </form>

//         <p className="login-footer">
//           Don't have an account?{" "}
//           <span className="login-link" onClick={() => navigate("/")}>
//             Shop as guest
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// }





































import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // ضفنا useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate(); // تعريف الـ navigate

  const [showEmail, setShowEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validate = () => {
    let tempErrors = { email: '', password: '' };
    let isValid = true;
    const emailRegex = /\S+@\S+\.\S+/;

    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Invalid email format";
      isValid = false;
    }

    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      tempErrors.password = "Min 6 characters";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Logged in!", { email, password });
      // التوجه للرئيسية (صفحة المنتجات) بعد نجاح الدخول
      navigate('/'); 
    }
  };

  return (
    <div className="login-wrapper grey-bg centered-flex">
      <div className="login-content-no-border wide-short">
        <h2>Welcome Back</h2>
        <p>Login to your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          {/* Email Field */}
          <div className="input-group figma-style">
            <label>Email</label>
            <div className="input-with-icon">
              <input 
                type="text" // خليته نص عادي عشان الايميل يظهر
                placeholder="Your email address" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({...errors, email: ''});
                }}
                className={errors.email ? "input-error" : "yellow-border"}
              />
            </div>
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          {/* Password Field */}
          <div className="input-group figma-style" style={{marginTop: '20px'}}>
            <label>Password</label>
            <div className="input-with-icon">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Your password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({...errors, password: ''});
                }}
                className={errors.password ? "input-error" : "yellow-border"}
              />
              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                )}
              </span>
            </div>
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="remember-me-container">
              <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
              <span className="checkmark-box"></span>
              Remember me
            </label>
            <Link to="#" className="forgot-pass">Forgot Password?</Link>
          </div>

          <button type="submit" className="login-submit-btn pill-red full-width">LOGIN</button>
        </form>

        <div className="login-footer">
          <span>Don't have an account? </span>
          <Link to="#" className="signup-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;