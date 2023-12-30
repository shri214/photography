import React from "react";
import { useInView } from "react-intersection-observer";
export const PressGallery = ({ order, ind, val }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div key={`press` + ind} className="pressGrid">
      <div className="press-box">
        <div ref={ref} className="press-img-desc">
          {order === "img" ? (
            <div className="fb">
              <div className="press-img">
                {inView && (
                  <a href="/press">
                    <img src={val.img} alt={`pressImg` + ind} />
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="fb">
              <div className="press-desc">
                <div className="press-text1">
                  <p className="date">{val.date}</p>
                  <div className="lines"></div>
                  <p className="press-heading">
                    <a href="/press">{val.heading}</a>
                  </p>
                </div>
                <div className="press-text2">
                  <p>{val.desc}</p>
                  <span className="material-icons">arrow_right_alt</span>
                </div>
              </div>
            </div>
          )}
          {order === "img" ? (
            <div className="fb">
              <div className="press-desc">
                <div className="press-text1">
                  <p className="date">{val.date}</p>
                  <div className="lines"></div>
                  <p className="press-heading">
                    <a href="/press">{val.heading}</a>
                  </p>
                </div>
                <div className="press-text2">
                  <p>{val.desc}</p>
                  <span className="material-icons">arrow_right_alt</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="fb">
              <div className="press-img">
                {inView && (
                  <a href="/press">
                    <img src={val.img} alt={`pressImg` + ind} />
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
