import "./App.css";
import { Link, Route, Routes } from "react-router-dom";


import LandingPage from "./componenets/landing-page/LandingPage";
import ReportSightings from "./componenets/report-sightings/ReportSightings";
import Informational from "./componenets/informational/Informational";
import Map from "./componenets/map/Map";
import Navbar from "../src/componenets/nav-bar/NavBar";
import Footer from "./componenets/footer/Footer";


function App() {
  return (
    <div className="App">

    <Navbar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/report-sightings" element={<ReportSightings />} />
        <Route path="/informational" element={<Informational />} />
        <Route path="/map" element={<Map />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
