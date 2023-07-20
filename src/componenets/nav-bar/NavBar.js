import React from 'react';
import logo from "../../assets/pictures/logo.jpg"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './navbar.css'



export default function Navbar() {
    const [showMobileNav, setShowMobileNav] = useState(false);
  
    const handleMobileNavToggle = () => {
      setShowMobileNav(!showMobileNav);
    };
  
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <ul className={`nav-links ${showMobileNav ? 'show-mobile-nav' : ''}`}>
          {/* <li><Link to="/eco-hub">Home</Link></li> */}
          <li><Link to="/report-sightings">Report Sightings</Link></li>
          <li><Link to="/informational">Informational</Link></li>
          <li><Link to="/map">Map</Link></li>
        </ul>
        <button className="mobile-nav-toggle" onClick={handleMobileNavToggle}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    );
  }
