import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const VideoPoster = ({videoUrl}) => {
    const videoRef = useRef(null);

  const navigate = useNavigate();
  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Restart the video
    }
  };
  return (
    <div className="videoPoster">
    <video
      controls
      loop
      width="1200"
      height="600"
      autoPlay
      muted
      playsInline
      style={{ width: "100%", height: "auto" }}
      ref={videoRef}
      onEnded={handleVideoEnded}
    >
      <source src={videoUrl} type="video/mp4" />
    </video>
    <div className="blackLayer"></div>
    <div className="close" onClick={(()=>{
      navigate("/portfolio")
    })}>X</div>
  </div>
  )
}

