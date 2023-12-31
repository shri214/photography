import { Link } from "react-router-dom";
import Logo2 from "./images/logo2.png";
import "./index.scss";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useSharedContext } from "./provider";

export const NavBar = () => {
  const { toggle, openFunction, toggleFunction } = useSharedContext();

  return (
    <div className="navbar-root-container">
      <div className="navbar-container">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/portfolio" className="link">
          Portfolio
        </Link>
        <Link to="/press" className="link">
          Press
        </Link>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
      {toggle && (
        <div className="nav-menu-container">
          <div className="close" onClick={toggleFunction}>
            X
          </div>

          <img src={Logo2} alt="logo2" className="dn" />
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/about" className="link">
            About
          </Link>
          <Link to="/portfolio" className="link">
            Portfolio
          </Link>
          <Link to="/press" className="link">
            Press
          </Link>
          <Link to="/contact" className="link">
            Contact
          </Link>
          <div className="nav-social-links">
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
            <button className="inquire-btn">
              <a href="/contact" className="contacts">
                <span className="inquire">inquire</span>

                <span className="arrow">
                  <ArrowRightOutlined className="social-icons" />
                </span>
              </a>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
