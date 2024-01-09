import "./footer.scss";
import One from "../images/one.jpeg";
import Two from "../images/kiss_scene.jpeg";
import Car from "../images/cam1.jpg";
import Three from "../images/cam2.jpg";
import Celebration from "../images/cam3.jpg";
import Cam4 from "../images/cam4.jpg"
import Four from "../images/four.jpeg";


import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

import { Link } from "react-router-dom";
import { Hero } from "./Hero";

export const Footer = () => {
  return (
    <section className="footer-container">
      <Hero types={"footer"} />
      <div className="step1">
        <div className="links">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/about">
            About
          </Link>
          <Link className="link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="link" to="/press">
            Press
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
        <div className="footer-social-links">
          <a className="icons" href="https://www.instagram.com/lerevefilms/">
            <InstagramFilled className="social-icons" />
          </a>
          <a
            className="icons"
            href="https://www.youtube.com/channel/UCzYo9JWzbjQdab44ZWhTesA"
          >
            <YoutubeFilled className="social-icons" />
          </a>
          <a className="icons" href="https://www.facebook.com/lerevefilms/">
            <FacebookFilled className="social-icons" />
          </a>

          <a href="/contact" className="contacts">
            <span className="inquire">inquire</span>

            <span className="material-icons">arrow_right_alt</span>
          </a>
        </div>
        <div className="contact-details">
          <p className="mails">
            <a href="mailto:info@lerevefilms.com">INFO@LEREVEFILMS.COM</a>
          </p>
          <p className="footer-text">657.229.5361</p>
          <button className="btn">
            <a href="https://www.instagram.com/lerevefilms/">
              Follow@LEREVEFILMS
            </a>
          </button>
        </div>
      </div>
      <div className="image-outer-container">
        <div className="images-container">
          <div className="img-boxes abFirst">
            <img src={One} alt="one" />
          </div>
          <div className="img-boxes abSecond">
            <img src={Car} alt="car" />
          </div>
          <div className="img-boxes">
            <img src={Celebration} alt="Celebration" />
          </div>
          <div className="img-boxes">
            <img src={Cam4} alt="four" />
          </div>
          <div className="img-boxes hides">
            <img src={Three} alt="three" />
          </div>
          <div className="img-boxes hides abLastSec">
            <img src={Two} alt="two" />
          </div>
          <div className="img-boxes hides abLast">
            <img src={Four} alt="two" />
          </div>
        </div>
      </div>
      <p className="bottom-text">
        Branding by TPD Design House|Photography Credits|The Le Rêve Films™ name
        is a trademark of Le Reve Productions Inc
      </p>
    </section>
  );
};
