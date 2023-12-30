import "./footer.scss";
import One from "../images/one.jpeg";
import Two from "../images/kiss_scene.jpeg";
import Car from "../images/car_pair_dark.jpeg";
import Three from "../images/three.jpg";
import Celebration from "../images/pair_celebration.jpeg";
import Four from "../images/four.jpeg";

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
      <div className="images-container">
        <img src={One} alt="one" />
        <img src={Car} alt="car" />
        <img src={Celebration} alt="Celebration" />
        <img src={Four} alt="four" />
        <img src={Three} alt="three" />
        <img src={Two} alt="two" />
      </div>
      <p className="bottom-text">
        Branding by TPD Design House|Photography Credits|The Le Rêve Films™ name
        is a trademark of Le Reve Productions Inc
      </p>
    </section>
  );
};
