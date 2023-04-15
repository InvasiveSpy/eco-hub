/**** */
//WORKING CODE
// import React from 'react';
// import { Link } from 'react-router-dom';
// import video1 from "../../assets/video/lionfish.mp4";
// import './landing-page.css';



// export default function LandingPage() {
//   return (
//     <div className="video-bg">
//     <div class="band"><h3 className="band-text">Click on a Species to learn more</h3></div>
//       <video autoPlay muted loop className="video" src={video1}/>
//       <div id="button-container" className="buttons-container">
//         <Link to="/report-sightings" id = "button button-report-sightings">
//           <button className="button button-report-sightings">Report Sightings</button>
//         </Link>
//         <br></br>
//         <Link to="/informational" id = "button button-informational">
//           <button className="button button-informational">Informational</button>
//         </Link>
//         <br></br>
//         <Link to="/map" id = "button button-map">
//         <button className="button button-map">Map</button>
//         </Link>
//       </div>
//     </div>
//   )
// }
//END OF WORKING CODE

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
      <div class="column" Link to="/report-sightings" id = "button button-report-sightings">
          <button className="button button-report-sightings">Report Sightings</button>
        </div>
        <div class="column" Link to="/informational" id = "button button-informational">
          <button className="button button-informational">Informational</button>
        </div>
        <div class="column" Link to="/map" id = "button button-map">
        <button className="button button-map">Map</button>
        </div>
      </div>

      </div>
  )
}

