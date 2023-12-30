import React from "react";
import "./photo.scss";
import { useInView } from "react-intersection-observer";
export const PhotoCollages = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className="photo-container">
      <div className="img1">
        <img
          src="https://static.showit.co/1200/l3RzScACQCeYsdgwXaXmkw/129082/reed_tyler_00_02_19_00_still005.jpg"
          alt="img1"
        />
      </div>
      <div ref={ref} className="img2">
        {inView && (
          <a href="/experience">
            <img
              src="https://static.showit.co/2400/gTIiec2YSRWWqjryW7N_aA/129082/untitled_5_161_1-topaz-denoise-enhance-faceai.jpg"
              alt="img3"
            />
          </a>
        )}
      </div>
      <div className="img3">
        <img
          src="https://static.showit.co/1200/3k74gMVcS-iC1Z2z_499rA/129082/screen_shot_04_3_87_2-topaz-enhance-faceai.jpg"
          alt="img2"
        />
      </div>
      <div className="img4">
        <p>from our clients</p>
      </div>
    </div>
  );
};
