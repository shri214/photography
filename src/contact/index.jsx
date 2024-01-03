import React from "react";
import { Hero } from "../footer/Hero";
import "./contact.scss";
import { Carousel } from "../about/carousel";
import { Link, useLocation } from "react-router-dom";
import { Couple } from "./couple";
import { EventPlanner } from "./eventPlanner";
import { Editorial } from "./editorial";

export const Contact = () => {
  const location = useLocation();
  console.log(location.pathname);

  const CoupleCarouselImage = [
    "https://static.showit.co/800/22mTmg4ESG-uS4bqsAOmhQ/129082/18--tiesto-wedding.jpg",
    "https://static.showit.co/800/YnPD-h3qSJmac_Vs1jZlrg/129082/lp_6089.jpg",
    "https://static.showit.co/2400/tSWCSr2WQSiUsBxGLC0NbA/129082/naomi_and_peter_7_13_1-topaz-denoise-enhance-faceai.jpg",
    "https://static.showit.co/800/s51gZPJ4Ro6Bbg4fBtF86g/129082/j_and_t_aisle.png",
    "https://static.showit.co/800/SLJL49q3TU-YcbvbzR7qIQ/129082/emily_and_will_1_48_1-topaz-enhance-faceai.jpg",
  ];
  const eventCarouselImage = [
    "https://static.showit.co/1600/VNj9aP1bTAmnzZ-TxU2G3g/129082/13--tiesto-wedding.jpg",
    "https://static.showit.co/800/0ewA8DbiQgGjxOycEfHxIw/129082/19--tiesto-wedding.jpg",
    "https://static.showit.co/800/aJWtNsNKRH2p7RFVHodqxw/129082/20191005_allanzepeda_13793a.jpg",
    "https://static.showit.co/800/ll66NcinQSKp7xNe6VCvUw/129082/20191005_allanzepeda_11811.jpg",
    "https://static.showit.co/800/NrA0a4zNTNej_sNlCR3RcQ/129082/20191005_allanzepeda_05699.jpg",
  ];
  const editorialCarouselImage = [
    "https://static.showit.co/800/_GX25zUGSwOgE1z5GtWf3g/129082/kleinfeldxlonesomerawphotos-brianleahyphoto-725_1.jpg",
    "https://static.showit.co/800/fqy6j9mySlaZHlN3EVXiqA/129082/kleinfeldxlonesomerawphotos-brianleahyphoto-340.jpg",
    "https://static.showit.co/800/pCeOxvyNQwSLZ-h3q2sQ5g/129082/kleinfeldxtulum-131.jpg",
    "https://static.showit.co/800/8dT8MpX_Qc2uDP72Yh3tUg/129082/220330_micaela_1160.jpg",
  ];
  console.log(location.pathname);
  return (
    <div className="contact">
      <Hero types={"nav"} />
      <div className="contact-container">
        <div className="contact-box">
          <div className="left-container contact-container-fb">
            <div className="left-box">
              {location.pathname === "/contact/" ? (
                <Carousel CarouselImage={CoupleCarouselImage} />
              ) : location.pathname === "/contact/event" ? (
                <Carousel CarouselImage={eventCarouselImage} />
              ) : location.pathname === "/contact/editorial" ? (
                <Carousel CarouselImage={editorialCarouselImage} />
              ) : (
                <Carousel CarouselImage={CoupleCarouselImage} />
              )}
            </div>
          </div>
          <div className="right-container contact-container-fb">
            <div className="right-box">
              <div className="right-inner-box">
                <h1>Inquire</h1>
                <div className="lines"></div>
                <div className="contact-desc">
                  <p>
                    We'd love to hear from you! Please fill out the form below
                    or send a note directly to info@lerevefilms.com
                  </p>
                </div>
              </div>
              <div className="contact-links">
                <Link to="./" className="links">
                  Couple
                </Link>
                <Link to="event" className="links">
                  Event Planner
                </Link>
                <Link to="editorial" className="links">
                  Editorial/Media
                </Link>
              </div>
              <div className="forms">
                {location.pathname === "/contact/" ? (
                  <Couple />
                ) : location.pathname === "/contact/event" ? (
                  <EventPlanner />
                ) : location.pathname === "/contact/editorial" ? (
                  <Editorial />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
