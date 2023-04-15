// import './App.css';
// import { Link, Route, Routes} from "react-router-dom";
// import {useState, useEffect} from 'react';

// import LandingPage from './componenets/landing-page/LandingPage';
// import ReportSightings from './componenets/report-sightings/ReportSightings';
// import Informational from './componenets/informational/Informational';
// import Map from './componenets/map/Map';

// function App() {
//   return (
//     <div className="App">
// 				<LandingPage></LandingPage>
//         <Routes>
//         <Route exact path="/" component={LandingPage} />
//         <Route path="/report-sightings" component={ReportSightings} />
//         <Route path="/informational" component={Informational} />
//         <Route path="/map" component={Map} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import LandingPage from "./componenets/landing-page/LandingPage";
import ReportSightings from "./componenets/report-sightings/ReportSightings";
import Informational from "./componenets/informational/Informational";
import Map from "./componenets/map/Map";
import logo from "../src/assets/pictures/logo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="nav-links">
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
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/eco-hub" element={<LandingPage />} />
        <Route path="/report-sightings" element={<ReportSightings />} />
        <Route path="/informational" element={<Informational />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
