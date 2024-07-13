/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./navbar.css";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavbarDoctor() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("doctalk");
    navigate(`/Doctalk_Main_Frontend`);
  };
  return (
    <div>
      <div className="navbar" style={{ backgroundColor: "#219F94" }}>
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
            <Link to="/Doctalk_Main_Frontend/">
              <img width="70px" src={logo} alt="" />
            </Link>
            <span style={{ color: "white", marginLeft: "20px" }}>DocTalk</span>
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <Link to="/Doctalk_Main_Frontend/doctor">Today's Schedule</Link>
          <Link to="/Doctalk_Main_Frontend/doctor/references">References</Link>
          <Link to="/Doctalk_Main_Frontend/doctor/profile">Profile</Link>
          <a style={{ color: "white" }} onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
}