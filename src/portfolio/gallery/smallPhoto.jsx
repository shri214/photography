import React from "react";
import { useNavigate } from "react-router-dom";
import "./smallPhoto.scss";

export const SmallPhoto = ({ imgUrl, description, city, ind, cl }) => {
  console.log(cl.substring(6));
  const alt = description.substring(0, 10);
  const navigate = useNavigate();
  return (
    <div
      key={ind}
      className={`container${cl.substring(6)} small-photo-container`}
    >
      <img src={imgUrl} alt={alt} className={cl} onClick={() => navigate("/press")} />
      <div onClick={() => navigate("/press")}>
        <div className="Add">+</div>
        <div className="photo-desc">
          <p className="desc">{description}</p>
          <p className="city">{city}</p>
        </div>
      </div>
    </div>
  );
};
