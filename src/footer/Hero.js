import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  ArrowRightOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import Logo1 from "../images/Logos.jpg";
import Logo2 from "../images/Logos.jpg";
import "./hero.scss";

import { useSharedContext } from "../provider";

export const Hero = ({ types }) => {
  const {openFunction } = useSharedContext();
 
  return (
    <div className={types==="nav"?"hero stickyPosition":"hero"}>
      {types === "nav" ? (
        <p className="desc">
          {"INTERNATIONAL CINEMATIC \n WEDDING FILMMAKING"}
        </p>
      ) : (
        ""
      )}
      <img
        src={types === "nav" ? Logo1 : Logo2}
        className={types !== "nav" ? "ml" : ""}
        alt="logo"
      />

      <div className="social-links">
        <a href="https://www.instagram.com/lerevefilms/">
          <InstagramFilled className="social-icons" />
        </a>
        <a href="https://www.youtube.com/channel/UCzYo9JWzbjQdab44ZWhTesA">
          <YoutubeFilled className="social-icons" />
        </a>
        <a href="https://www.facebook.com/lerevefilms/">
          <FacebookFilled className="social-icons" />
        </a>
        <a href="/contact" className="contacts">
          <span className="inquire">inquire</span>
        </a>
        <span className="arrow">
          <ArrowRightOutlined className="social-icons" />
        </span>
      </div>
      {types === "nav" ? (
        <div className="menu">
          <MenuFoldOutlined className="menu-icon" onClick={openFunction} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
