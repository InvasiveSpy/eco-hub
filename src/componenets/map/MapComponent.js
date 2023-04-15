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

  const handleButtonClick = async () => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${currentPosition.lat},${currentPosition.lng}&key=AIzaSyDFvWq5shTH42w1ObKuzUNKR4QY-kbtijA`
    );
    console.log({ response });
    const data = await response.json();
    if (data.results.length > 0) {
      const city = data.results[0].address_components.find(
        (component) =>
          component.types.includes("locality") ||
          component.types.includes("administrative_area_level_1")
      );
      console.log("Current Position: ", currentPosition);
      console.log("City: ", city.long_name);
    }
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
