import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Logo1 from "../images/logo.png";
import Logo2 from "../images/logo2.png";
import "./hero.scss";

export const Hero = ({ types }) => {
  return (
    <div className="hero">
      {types === "nav" ? (
        <p className="desc">
          {"INTERNATIONAL CINEMATIC \n WEDDING FILMMAKING"}
        </p>
      ) : (
        ""
      )}
      <img src={types === "nav" ? Logo1 : Logo2} className={types!=='nav' ? "ml":""} alt="logo" />
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
    </div>
  );
};
