import React, { useState, useEffect } from 'react';
import './Carousel.scss'; 


export const Carousel = ({CarouselImage}) => {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); 
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {CarouselImage.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Images ${index}`}
          className={index === currentSlide ? 'slide active' : 'slide'}
        />
      ))}
    </div>
  );
};

