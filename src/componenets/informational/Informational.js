import React from 'react';
import './informational.css';


import plant from '../../assets/pictures/plant.jpg';
import aquaticPlant from '../../assets/pictures/aquaticPlant.jpg';
import reptile from '../../assets/pictures/reptile.jpg';
import amphibian from '../../assets/pictures/amphibian.jpg';
import insect from '../../assets/pictures/insect.jpg';
import fish from '../../assets/pictures/fish.jpg';
import mammal from '../../assets/pictures/mammal.jpg';
import bird from '../../assets/pictures/bird.jpg';

const video2 = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574594/iguana.mp4"


export default function informational() {

  return (

    <div className="video-bg">

    <div className="container">
     <video autoPlay muted loop className="video" src={video2}/>
     
    <div className="informational-container">
   
    <h3 classname="category-title">Click on a Category to Learn More</h3>
    
    <a href="https://example.com" className="image-link">
    <img src={plant} alt="Plant Image" className="image" />
    <div className="image-text">
    <h3>Plants</h3>
    </div>
    </a>
    
    <a href="https://example.com" className="image-link">
    <img src={aquaticPlant} alt="Aquatic Plants Image" className="image" />
    <div className="image-text">
    <h3>Aquatic Plants</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={reptile} alt="Reptiles Image" className="image" />
    <div className="image-text">
    <h3>Reptiles</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={amphibian} alt="Amphibians Image" className="image" />
    <div className="image-text">
    <h3>Amphibians</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={insect} alt="Insects (Invertebrates) Image" className="image" />
    <div className="image-text">
    <h3>Insects (Invertebrates)</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={fish} alt="Fish Image" className="image" />
    <div className="image-text">
    <h3>Fish</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={mammal} alt="Mammmals Image" className="image" />
    <div className="image-text">
    <h3>Mammals</h3>
    </div>
    </a>

    <a href="https://example.com" className="image-link">
    <img src={bird} alt="Birds Image" className="image" />
    <div className="image-text">
    <h3>Birds</h3>
    </div>
    </a>

  </div>
  </div>
  </div>
  )
}