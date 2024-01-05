import React, { useState, useEffect } from "react";

export const ExperienceCarousel = () => {
  const data = [
    {
      image:
        "https://static.showit.co/800/VF8n6G6CSnKVP-TS6nGBAw/129082/24--tiesto-wedding.jpg",
      text: "IS IN LOVE WITH",
      text2: " THE FINER DETAILS",
    },
    {
      image:
        "https://static.showit.co/800/x02mVFf7TLKZ1Io1zMzTKA/129082/croppedgianna_blake-193.jpg",
      text: "IS SENTIMENTAL",
      text2: "AND IMPASSIONED",
    },
    {
      image:
        "https://static.showit.co/800/S33L-1b1TJq2pRoXfjdFQQ/129082/20191005_allanzepeda_11423.jpg",
      text: "IS A SEEKER OF CHAMPAGNE ",
      text2: "AND CELEBRATION",
    },
    {
      image:
        "https://static.showit.co/800/pGq5e6V4RsGAuEOp8QmDyQ/129082/kleinfeldxtulum-98_websize.jpg",
      text: "IS CAPTIVATED BY ",
      text2: "TRAVEL",
    },
    {
      image:
        "https://static.showit.co/800/ccRCWHoCQ0qaBE8_yOQjSg/129082/bm_173.jpg",
      text: "IS IN LOVE WITH ",
      text2: "THE FINER DETAILS",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === data.length - 1 ? 0 : prevImage + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={data[currentImage].image} alt={`Images ${currentImage + 1}`} />
      <div className="absolute">
        <p className="text1">The Le Rêve Films Couple</p>
        <p className="text2">{data[currentImage].text}</p>
        <p className="text2">{data[currentImage].text2}</p>
        <p className="line"></p>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
};
