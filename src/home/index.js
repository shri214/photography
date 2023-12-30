import React, { useEffect, useState } from "react";
import { InfiniteVideoPlayer } from "./video";
import { GridGallery } from "./gridGallery";

// import girl from "../images/white_dress_girl.jpeg";

import bazaar from "../images/bazaar.jpg";
import brides from "../images/brides.png";
import styleme from "../images/styleme.png";
import iheart from "../images/iheart.png";
import kleinfeld from "../images/kleinfeld.jpg";
import overthemoon from "../images/overthemoon.png";
import people from "../images/people.png";
import vogue from "../images/wedding.png";
import wedding from "../images/bazaar.jpg";

import "./home.scss";
import { useNavigate } from "react-router-dom";
import { PhotoCollages } from "./photoCollages";
import { HomePress } from "./homePress";
import { Hero } from "../footer/Hero";
import { Poster2 } from "../poster2";

const logo = [
  { image: bazaar, class: "pres_0" },
  { image: vogue, class: "pres_1" },
  { image: people, class: "pres_2" },
  { image: overthemoon, class: "pres_3" },
  { image: wedding, class: "pres_4" },
  { image: iheart, class: "pres_5" },
  { image: kleinfeld, class: "pres_6" },
  { image: styleme, class: "pres_7" },
  { image: brides, class: "pres_8" },
];

const poster2Data = [
  {
    img: "https://static.showit.co/1600/w_RCcCSXQi6anj6i-FKrIw/129082/teresa_and_brock_05_2_5_1-topaz-denoise-enhance-faceai.jpg",
    para1: "Let's create something",
    para2: "beautiful",
    para3: "Contact Us",
  },
];
export const Home = () => {
  const [height, setHeight] = useState("750px");

  const navigate = useNavigate();

  const videoUrl =
    "https://player.vimeo.com/video/857331900?background=1&autoplay=1&loop=1";

  const imageUrl =
    "https://static.showit.co/800/2oeXoEaLSTmZmXWR3d9kOw/129082/naomi_and_peter_mobile_1_25_1.jpg";

  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const calculatedHeight = `${screenWidth * 0.5}px`;
      setHeight(calculatedHeight);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container">
      <Hero types={"nav"} />
      <div className="videoSection" style={{ height }}>
        <InfiniteVideoPlayer videoUrl={videoUrl} imageUrl={imageUrl} />
        <div className="desc">
          <h2 className="header_1 mb">
            <b>A DREAM YOU CAN REVISiT</b>
          </h2>
          <div className="line mb"></div>
          <h1 className="header_2 mb">INFUSING THE FEELING&nbsp;</h1>
          <h1 className="header_3 mb">OF</h1>
          <span className="header_4 mb">Celebration</span>
          <h1 className="header_5 mb">INTO YOUR FILM</h1>
        </div>
      </div>
      <div className="subheading_1">
        <p>NAMED BY HARPER'S BAZAAR AS ONE OF</p>
        <p>THE TOP WEDDING VIDEOGRAPHERS IN THE</p>
        <p>World</p>
        <div className="lines"></div>
      </div>
      <div className="press">
        <div className="press-container">
          {logo.map((val, ind) => {
            return (
              <div key={ind} className={val.class}>
                <img src={val.image} alt={val.class} />
              </div>
            );
          })}
        </div>
      </div>

      <GridGallery />

      <div className="home-text-btn">
        <div className="text-2">
          <p>"As I watched their film, tears just filled my eyes"</p>
        </div>
        <div className="text-3">
          <p>
            We want every film to be a dream our couples can revisit. While
            capturing the essence of each event; we want to move our viewers to
            experience true emotion and feel a connection to each film.
          </p>
        </div>
        <button className="home-btn" onClick={goToPortfolio}>
          VIEW THE FILMS
        </button>
      </div>
      <div className="posters" >
        <img 
          src="https://static.showit.co/1600/QRf-TiuNTFOCxb3PZaBrHQ/129082/b_and_w_katrina_chris-1171.jpg"
          alt="poster"
        />
      </div>

      <PhotoCollages />

      <div className="photo-desc">
        <p>
          “We were in absolute awe of the beauty, artistry, and pure joy that
          our wedding video captures of the most special day of our lives.”
        </p>
        <div className="lines"></div>
        <div className="text-4">
          <p>RILEY & CAMERON</p>
        </div>
      </div>

      <div className="home-about">
        <div className="home-about-image">
          <img
            src="https://static.showit.co/2400/HnlRPqJcSd2r4yLfWCekJA/129082/lauradee_engage17_day3_cocktailhour_054-topaz-enhance-faceai.jpg"
            alt="home-about-images"
          />
        </div>
        <div className="home-about-desc">
          <div className="home-about-heading-0">
            <p>BEHIND THE LENS</p>
            <div className="lines"></div>
          </div>
          <div className="home-about-heading-1">
            <h1>{"WE ARE LERÊVE FILMS"}</h1>
          </div>
          <div className="home-about-heading-2">
            <p>
              We launched Le Rêve Films in 2010 from our shared passion for
              traveling the world and transforming the magical memories from a
              couple's nuptials into a visual tapestry that showcases their love
              story for a lifetime.
            </p>
          </div>
          <button className="btn" onClick={() => navigate("/about")}>
            About
          </button>
        </div>
      </div>

      <div className="home-press">
        <HomePress />
      </div>

      <Poster2 data={poster2Data[0]} />
    </div>
  );
};
