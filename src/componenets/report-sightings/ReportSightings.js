import React from 'react'
const video3 = "https://res.cloudinary.com/dacloudycloud/video/upload/v1681574607/snail.mp4"

export default function ReportSightings() {
  return (
    <div className="video-bg">
      <div className="container">
     <video autoPlay muted loop className="video" src={video3}/>
     </div>
     </div>
  )
}
