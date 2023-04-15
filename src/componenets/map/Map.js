import React from 'react'


export default function Map() {
  const egretVideoUrl = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574569/egret.mp4"
  return (
    <div className="video-bg">
    <div className="container">
   <video autoPlay muted loop className="video" src={egretVideoUrl}/>
   </div>
   </div>
  )
}
