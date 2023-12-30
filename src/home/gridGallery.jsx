import React from "react";
import { useInView } from "react-intersection-observer";
import "./grids.scss";

const LazyImage = ({ src, alt, ind, url }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={ind===0 ? "grid-img left-grid-img-1":ind===1?"grid-img left-grid-img-2":ind===2?"grid-img right-grid-img-1":ind===3?"grid-img right-grid-img-2":"grid-img"}>
      <a href={url}>
        {inView && (
          <img
            className="hoverEffect"
            src={src}
            alt={alt}
          />
        )}
      </a>
    </div>
  );
};



export const GridGallery = () => {
  const images = [
    {
      src: "https://static.showit.co/2400/y7TAoXQCSkSMZ1x8yXMCiA/129082/naomi_and_peter_7_13_1-topaz-denoise-enhance-faceai.jpg",
      alt: "grid-img-1",
      url:"/naomi-and-peter",
    },
    {
      src: "https://static.showit.co/1600/ANZjDZ-ETKSIz85LGrhwFg/129082/kait_and_logan_4_24_1-topaz-enhance-faceai.jpg",
      alt: "grid-img-2",
      url:"/kait-and-logan"
    },
    {
      src: "https://static.showit.co/1200/vDrY3hguSweT-go7QHs8kA/129082/misha_and_dara_8_57_1-topaz-denoise-enhance-1x-faceai.jpg",
      alt: "right-grid-img-1",
      url:"/real-weddings-teaser",
    },
    {
      src: "https://static.showit.co/1200/PeJ9EBLIRoSRmqys9LzXVg/129082/allanzepedaphoto_00368.jpg",
      alt: "right-grid-img-2",
      url:"/engage-sicily",
    },
  ];

  return (
    <div className="photo-grid">
      <div className="left-grid">
        {images.slice(0, 2).map((image, index) => (
          <LazyImage key={index} src={image.src} alt={image.alt} ind={index} url={image.url}/>
        ))}
      </div>
      <div className="right-grid">
        <div className="grid-desc">
          <p>
            WE DISTILL BOTH THE PHYSICAL BEAUTY AND THE INTANGIBLE EMOTION OF
            OUR CLIENTS' WEDDINGS INTO ONE STUNNING FILM
          </p>
          <div className="lines"></div>
        </div>
        {images.slice(2).map((image, index) => (
          <LazyImage key={index + 2} src={image.src} alt={image.alt} ind={index+2} url={image.url} />
        ))}
      </div>
    </div>
  );
};