import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./componenets/landing-page/LandingPage";
import ReportSightings from "./componenets/report-sightings/ReportSightings";
import Informational from "./componenets/informational/Informational";
import Map from "./componenets/map/Map";
import logo from "../src/assets/pictures/logo.jpg";

function Navbar() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleMobileNavToggle = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className={`nav-links ${showMobileNav ? "show-mobile-nav" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/report-sightings">Report Sightings</Link>
        </li>
        <li>
          <Link to="/informational">Informational</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
      </ul>
      <button className="mobile-nav-toggle" onClick={handleMobileNavToggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
}

function Footer() {
  return (
    <nav className="footer">
      <ul className="nav-links">
        <p>EcoHub | All Rights Reserved 2023</p>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/eco-hub" element={<LandingPage />} />
        <Route path="/report-sightings" element={<ReportSightings />} />
        <Route path="/informational" element={<Informational />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
