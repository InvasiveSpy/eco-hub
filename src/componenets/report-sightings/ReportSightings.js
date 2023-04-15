import React, {useState} from 'react';
import axios from "axios";
import ReactImageFileToBase64 from "react-file-image-to-base64";

const video3 = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574607/snail.mp4";



export default function ReportSightings() {
  const [image, setImage] = useState({});
  const [nameOfPLant, setNameOfPLant] = useState("");
  
  console.log(nameOfPLant);

  const handleOnCompleted = files => {
    console.log(files[0].base64_file)
    setImage(files[0]);
    runSampleApiCall(files[0].base64_file);
  };

const runSampleApiCall = (baseString) =>{
  axios.post("https://api.plant.id/v2/identify", {images: [baseString]}, 
  { headers: 
    {
    "Api-Key":"Vh4cdMbb2TcDKTATp10GoIys7WWOuI2PsrH6DdvEpvX9fPJZIh"
    }
  })
  .then((response)=>{
    if(response.data && response.data.suggestions){
      console.log(response);
      setNameOfPLant(response.data.suggestions[0].plant_name);
    }
  })
  .catch((err)=>{
    console.log(err);
  })
  
}




  return (
    <div>
        
      <div className="video-bg">
        <div className="container">
      <video autoPlay muted loop className="video" src={video3}/>

      <div className="image-search-container">
      <div className="image-search">
          <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
      </div>
      </div>
      </div>
      </div>
      </div>  
  )
}
