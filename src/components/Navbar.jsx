import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="logo" />
        <span className="brand">
          Minimal <span className="shop">Shop</span>ping
        </span>
      </div>
      <img
        src={user}
        alt="user"
        className="user-icon"
        onClick={() => navigate("/login")}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}