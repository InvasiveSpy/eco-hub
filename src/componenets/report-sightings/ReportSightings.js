import React, { useState } from "react";
import axios from "axios";
import ReactImageFileToBase64 from "react-file-image-to-base64";

const video3 =
  "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574607/snail.mp4";

export default function ReportSightings() {
  const [image, setImage] = useState({});
  const [nameOfPLant, setNameOfPLant] = useState("");

  console.log(nameOfPLant);

  const handleOnCompleted = (files) => {
    console.log(files[0].base64_file);
    setImage(files[0]);
    runSampleApiCall(files[0].base64_file);
  };

  const runSampleApiCall = (baseString) => {
    axios
      .post(
        "https://api.plant.id/v2/identify",
        { images: [baseString] },
        {
          headers: {
            "Api-Key": "Vh4cdMbb2TcDKTATp10GoIys7WWOuI2PsrH6DdvEpvX9fPJZIh",
          },
        }
      )
      .then((response) => {
        if (response.data && response.data.suggestions) {
          console.log(response);
          setNameOfPLant(response.data.suggestions[0].plant_name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  const width = 320; // We will scale the photo width to this
  let height = 0; // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  let streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  let video = null;
  let canvas = null;
  let photo = null;
  let startbutton = null;

  function showViewLiveResultButton() {
    if (window.self !== window.top) {
      // Ensure that if our document is in a frame, we get the user
      // to first open it in its own tab or window. Otherwise, it
      // won't be able to request permission for camera access.
      document.querySelector(".contentarea").remove();
      const button = document.createElement("button");
      button.textContent = "View live result of the example code above";
      document.body.append(button);
      button.addEventListener("click", () => window.open(window.location.href));
      return true;
    }
    return false;
  }

  function startup() {
    if (showViewLiveResultButton()) {
      return;
    }
    video = document.getElementById("video");
    canvas = document.getElementById("canvas");
    photo = document.getElementById("photo");
    startbutton = document.getElementById("startbutton");

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });

    video.addEventListener(
      "canplay",
      (ev) => {
        if (!streaming) {
          height = video.videoHeight / (video.videoWidth / width);

          // Firefox currently has a bug where the height can't be read from
          // the video, so we will make assumptions if this happens.

          if (isNaN(height)) {
            height = width / (4 / 3);
          }

          video.setAttribute("width", width);
          video.setAttribute("height", height);
          canvas.setAttribute("width", width);
          canvas.setAttribute("height", height);
          streaming = true;
        }
      },
      false
    );

    startbutton.addEventListener(
      "click",
      (ev) => {
        takepicture();
        ev.preventDefault();
      },
      false
    );

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    const context = canvas.getContext("2d");
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    const data = canvas.toDataURL("image/png");
    photo.setAttribute("src", data);
  }

  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    const context = canvas.getContext("2d");
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);

      const data = canvas.toDataURL("image/png");
      photo.setAttribute("src", data);

      const base64OfImage = data?.split(",")?.[1];
    } else {
      clearphoto();
    }
  }

  // Set up our event listener to run the startup process
  // once loading is complete.
  window.addEventListener("load", startup, false);

  return (
    <div>
      <div className="webcam-capture-container">
        <div className="contentarea">
          <div className="camera">
            <video id="video">Video stream not available.</video>
            <button id="startbutton">Take photo</button>
          </div>
          <canvas id="canvas"> </canvas>
          <div className="output">
            <img id="photo" alt="The screen capture will appear in this box." />
          </div>
        </div>
      </div>
      <div>
        <ReactImageFileToBase64 onCompleted={handleOnCompleted} />
      </div>
      <div className="video-bg">
        <div className="container">
          <video autoPlay muted loop className="video" src={video3} />
        </div>
      </div>
    </div>
  );
}
