import React from "react";
import { useNavigate } from "react-router-dom";
import "./homePresses.scss";
import { useInView } from "react-intersection-observer";

export const HomePress = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const navigate = useNavigate();

  return (
    <div className="home-press-container">
      <div ref={ref} className="home-press-containers mt130">
        <div  className="home-press-container-img">
          {inView && (
            <a href="/portfolio">
              <img
                src="https://static.showit.co/800/ZYDEiAp9RRWDlYzODXmDeQ/129082/vo0223_naomicover_copy.jpg"
                alt="home-press-container-img"
              />
            </a>
          )}
        </div>
        <div className="home-press-container-desc">
          <div className="home-press-text-1">
            <p>press</p>
          </div>
          <div className="home-press-text-2 ml">
            <span>WASHINGTON DC</span>
          </div>
          <div className="home-press-text-3 ml">
            <span>VOGUE FEATURE: NAOMI BIDEN ON HER WHITE HOUSE WEDDING</span>
          </div>
          <div className="home-press-text-4 ml">
            <p>
              Over the weekend, Naomi Biden, the eldest granddaughter of
              President Biden, wed her husband Peter Neal on the South Lawn of
              the White House.
            </p>
          </div>
          <div
            className="underline"
            onClick={() => navigate("/portfolio")}
          ></div>
        </div>
      </div>

      <div ref={ref1} className="home-press-containers heightManage">
        <div className="home-press-container-desc container-desc2">
          <div className="home-press-text-2 ml">
            <span>LONG ISLAND, NEW YORK</span>
          </div>
          <div className="home-press-text-3 ml">
            <span>PEOPLE FEATURE: TOBIAS HARRIS & JASMINE WINTON</span>
          </div>
          <div className="home-press-text-4 ml">
            <p>
              NBA Star Tobias Harris Weds Jasmine Winton at a New York Castle:
              'She Just Opened My Eyes Up'
            </p>
          </div>
          <div
            className="underline"
            onClick={() => navigate("/portfolio")}
          ></div>
        </div>
        <div  className="home-press-container-img container-img">
          {inView1 && (
            <a href="/portfolio">
              <img
                className="container-img-2"
                src="https://static.showit.co/800/boEm1A8-SdOWKLs4XeAWeA/129082/o-tobias-harris-wedding-8722-75cb497943d44a5a864d55c27f6bec63.jpg"
                alt="home-press-containers-img"
              />
            </a>
          )}

<div className="wantMore">
        <p>want more ?</p>
        <button className="btn" onClick={(()=>navigate("/press"))}>Press</button>
      </div>
        </div>
      </div>
     
    </div>
  );
};


