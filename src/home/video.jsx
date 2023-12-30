import React, {  useState } from "react";

export const InfiniteVideoPlayer = ({ videoUrl, imageUrl }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const handelVideo = () => {
    console.log("video loaded");
    setVideoLoaded(true);
  };

  return (
    <>
      {!videoLoaded && (
        <img src={imageUrl} alt="white-dress" className="white-dress" />
      )}
      {videoLoaded && (
        <iframe
          onLoad={handelVideo}
          title="Vimeo Player"
          src={videoUrl}
          frameBorder="0"
          height="100%"
          width="100%"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      )}
    </>
  );
};
