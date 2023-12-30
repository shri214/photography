import React from "react";
import { Hero } from "../footer/Hero";
import "./contact.scss";
import { Carousel } from "../about/carousel";

const CarouselImage=[
  "https://static.showit.co/800/7T8U8YjfTceTfjzMNHw4ZA/129082/allanzepedaphoto_azp_5038.jpg",
  "https://static.showit.co/800/gfpv9cpCSmWy-YlPis3nDA/129082/allanzepedaphoto_zp_2925.jpg",
  "https://static.showit.co/800/mDcDoGb2Rcui87jKbWutIg/129082/working_03.jpg",
  "https://static.showit.co/800/dyb8THfQQ0uyd68pF73ZXA/129082/engage18-carla-ten-eyck-registration-38.jpg",
  "https://static.showit.co/800/4m9V312oQSa8n4v1D-FaQA/129082/cherish_and_lindsey_london.jpg",
]
export const Contact = () => {
  return (
    <div className="contact">
      <Hero types={"nav"} />
      <div className="contact-container">
        <div className="contact-box">
          <div className="left-container contact-container-fb">
            <div className="left-box">
            <Carousel CarouselImage={CarouselImage} />
            </div>
          </div>
          <div className="right-container contact-container-fb"></div>
        </div>
      </div>
    </div>
  );
};
