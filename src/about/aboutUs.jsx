import React from "react";
import { Carousel } from "./carousel";

const CarouselImage=[
  "https://static.showit.co/800/7T8U8YjfTceTfjzMNHw4ZA/129082/allanzepedaphoto_azp_5038.jpg",
  "https://static.showit.co/800/gfpv9cpCSmWy-YlPis3nDA/129082/allanzepedaphoto_zp_2925.jpg",
  "https://static.showit.co/800/mDcDoGb2Rcui87jKbWutIg/129082/working_03.jpg",
  "https://static.showit.co/800/dyb8THfQQ0uyd68pF73ZXA/129082/engage18-carla-ten-eyck-registration-38.jpg",
  "https://static.showit.co/800/4m9V312oQSa8n4v1D-FaQA/129082/cherish_and_lindsey_london.jpg",
]
export const AboutUs = () => {
  return (
    <>
      <div className="AboutUs-1-container">
        <div className="AboutUs-1-container-img">
          <img
            src="https://static.showit.co/800/cI4BK3w-R6W6VUOwSwUa0Q/129082/working_07.jpg"
            alt="about-img-1"
          />
        </div>
        <div className="AboutUs-1-container-desc">
          <p className="about-text-3">About Us</p>
          <div className="about-text-4 ml">
            <p>WE ARE </p>
            <p> LE RÊVE FILMS</p>
          </div>
          <div className="lines ml"></div>
          <div className="about-text-5 ml">
            <p>
              Le RÊvE Films is primarily made up of husband and wife duo Lindsey
              and Cherish Conklin. This husband-wife duo launched Le Rêve Films
              in 2010 from their shared passion for traveling the world and
              transforming the magical memories from a couple’s nuptials into a
              visual tapestry that showcases their love story for a lifetime. Le
              Rêve takes pride in focusing on capturing the beauty, emotion and
              all the details in between from a couple’s wedding weekend, all
              the while, always portraying real, authentic love.
            </p>
            <br />
            <p>
              Le Rêve Films’ reputation and award-winning work has been featured
              in Vogue, People, BRIDES, Martha Stewart Weddings, iHeart Radio,
              and has earned them a spot among Harper’s BAZAAR’s list of The Top
              Wedding Videographers in the World. They have had the privilege of
              capturing events for clients like Naomi Biden, Sean McVay, DJ
              Tiesto, and other high-profile celebrities, musicians and
              athletes.
            </p>
          </div>
        </div>
      </div>
      <div className="AboutUs-1-container">
        <div className="AboutUs-1-container-desc-2">
          <div className="container-desc-2">
            <p>
              Le RÊvE Films is primarily made up of husband and wife duo Lindsey
              and Cherish Conklin.
            </p>
          </div>
        </div>
        <div className="AboutUs-1-container-img-2">
          <Carousel CarouselImage={CarouselImage}/>
        </div>
      </div>
    </>
  );
};
