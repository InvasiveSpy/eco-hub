import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './invasive-animals-band.css';

export default function InvasiveAnimalsBand({ onSpeciesClick }) {
  const [speciesList, setSpeciesList] = useState([]);
  const [randomSpeciesIndex, setRandomSpeciesIndex] = useState(0);

  useEffect(() => {
    axios.get('https://api.invasivespeciesinfo.gov/public/api/v1/species', {
      params: {
        isState: 'FL',
        pagesize: 50,
      },
    })
      .then(response => {
        setSpeciesList(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (speciesList.length > 0) {
      const intervalId = setInterval(() => {
        setRandomSpeciesIndex(prevIndex => (prevIndex + 1) % speciesList.length);
      }, 5000);

      return () => {
        clearInterval(intervalId);
      };
    }
  }, [speciesList]);

  const handleClick = (index) => {
    const species = speciesList[index];
    console.log(`Clicked on ${species.commonName}`);
    onSpeciesClick(species);
    // TODO: Navigate to species page
  };


  return (
    <div>
      {speciesList.length > 0 ? (
        <div onClick={() => handleClick(randomSpeciesIndex)}>
          <p>{speciesList[randomSpeciesIndex].commonName}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}