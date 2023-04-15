import React, {useState} from 'react';
import axios from "axios";
import ChatWindow from "../openAI/openAI";
import { Configuration, OpenAIApi } from "openai";
import ReactImageFileToBase64 from "react-file-image-to-base64";
const video3 = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574607/snail.mp4";




export default function ReportSightings() {
  const [image, setImage] = useState({});
  const [nameOfPLant, setNameOfPLant] = useState("");

  const apiKey = "blah";
  const model = "text-davinci-003";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);
  
  console.log(nameOfPLant);

  const handleInput = async () => {
 
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, sender: "user" },
    ]);

    const plantName = "Pueraria montana";
    const city = "Miami, FL";
    

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `What is the history of ${plantName} in ${city} and is it considered invasive? \n\n Do I need to report if I see it in ${city}? is there an email address for that?`,
      temperature: 0,
      max_tokens: 1006,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    console.log("response", response);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: response.data.choices[0].text, sender: "bot" },
    ]);
    setInput("");
  };


  const handleOnCompleted = files => {
    // console.log(files[0].base64_file)
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
      handleInput();
    }
  })
  .catch((err)=>{
    console.log(err);
  })
  
}




  return (
    <div>
        
      <div>
        {messages.map((message, index) => (
          <div key={index}>
              <div>
                <strong>Bot:</strong> {message.text}
              </div>
          
          </div>
        ))}
      </div>
     
      <div className="video-bg">
        <div className="container">
      <video autoPlay muted loop className="video" src={video3}/>

      <div><ChatWindow city={"Miami, FL"} plantName={"Pueraria montana"} /></div>
        <div>
          <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
        </div>
        
      </div>
      </div>
      </div>  
  )
}
