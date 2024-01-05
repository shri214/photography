import React from "react";
import { useInView } from "react-intersection-observer";

export const Reviews = ({ data, types }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div className={types === "single" ? "review2" : "review2 col"}>
      <div className="review-2-container ">
        <p className="review-2-desc1">{data.text1}</p>
        <p className="review-2-desc2">{data.text2}</p>
        <p className="lines"></p>
        <p className="review-2-heading">{data.text3}</p>
      </div>
      <div ref={ref} className="review-2-container">
        {types === "single" ? inView && (
          <div className="images">
            <img
              src="https://static.showit.co/800/NOVl2_otRmq0Yk21f5u_tA/129082/ehrlich.jpg"
              alt="review-2-img"
            />
          </div>
        ) : (
          inView && (
            <div className="doubleImg">
              <img
                className="smaller"
                src="https://static.showit.co/1200/4GwgKbJpTtmVc3WCzxlAiA/129082/ag-0894.jpg"
                alt="img2"
              />
              <img
                className="bigger"
                src="https://static.showit.co/800/7ldVBM7XQ7aUeeXAEyMdRw/129082/ag-0774.jpg"
                alt="img1"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};
