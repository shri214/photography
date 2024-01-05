import React from "react";
import "./poster.scss";

export const Poster = ({ posterData, com }) => {
  console.log(posterData[0]);
  return (
    <div className={posterData[1].cl0}>
      <div
        className={
          posterData[1].clBlackLayer
            ? `${posterData[1].clBlackLayer}`
            : "black-layer"
        }
      ></div>
      <img className="poster-img" src={posterData[0].img} alt="poster-images" />
      <div className={posterData[1].cl1}>
        {posterData[0].text0 && (
          <p className={posterData[1].cl2}>{posterData[0].text0}</p>
        )}
        {posterData[0].text0 && <div className="lines"></div>}
        <div className={posterData[1].cl3}>
          <p>{posterData[0].text1}</p>
        </div>
        {com === "press" ? (
          <div className={posterData[1].cl4}>
            <p>{posterData[0].text2}</p>
          </div>
        ) : (
          <div className={posterData[1].cl4}>
            <p>{posterData[0].text2}</p>
          </div>
        )}
      </div>
      
    </div>
  );
};
