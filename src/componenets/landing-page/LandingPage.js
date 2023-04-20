import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';
const video1 = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574601/lionfish.mp4";


export default function LandingPage() {
  return (
    <div className="video-bg">
      <div class="band"><h3 className="band-text">Click on a Species to learn more</h3></div>
      <video autoPlay muted loop className="video" src={video1}/>
   
      <div class="info-container">
            
      <div class="button-container">
      {/* <h2>How It Works</h2> */}
      <Link to="/report-sightings" class="column" id="button button-report-sightings">
      <button className="button button-report-sightings">Report Sightings</button>
      <div class="button1-text">See a species you think is invasive? Take a picture and find out!</div>
      </Link>
      
      

    
      <Link to="/informational" class="column" id="button button-informational">
      <button className="button button-informational">Informational</button>
      <div class="button2-text">Want to know more about invasive species in Florida? This is the place for you!</div>
      </Link>
      


      <Link to="/map" class="column" id="button button-map">
      <button className="button button-map">Map</button>
      <div class="button3-text">Check out what species are invasive by you and steps you can take to help eradicate them.</div>
      </Link>
      </div>

  </div>
</div>
  )
}