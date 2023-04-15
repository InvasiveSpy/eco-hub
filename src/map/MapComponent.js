import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

function MyComponent() {
  const [currentPosition, setCurrentPosition] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  const handleMarkerFDragEnd = (e) => {
    setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    console.log(currentPosition);
  };

  const handleMapClick = (e) => {
    setCurrentPosition({ lat: e.latLng.lat(), lng: e.latLng.lng() });
    console.log(currentPosition);
  };

  const handleButtonClick = () => {
    console.log(currentPosition);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDFvWq5shTH42w1ObKuzUNKR4QY-kbtijA">
      {currentPosition ? (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={18}
            options={{ disableDefaultUI: true }}
            onClick={handleMapClick}
          >
            <MarkerF
              position={currentPosition}
              draggable={true}
              onDragEnd={handleMarkerFDragEnd}
            />
          </GoogleMap>
          <div className="button-container">
            <button onClick={handleButtonClick}>Log Current Position</button>
          </div>
        </>
      ) : (
        <p>Loading map...</p>
      )}
    </LoadScript>
  );
}

export default React.memo(MyComponent);
