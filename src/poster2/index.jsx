import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";
export const Poster2 = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="poster2">
      <img src={data.img} alt="poster2" />
      <div
        className={data.clFix ? `poster2-desc ${data.clFix}` : "poster2-desc"}
      >
        <p
        className={data.clName ? data.clName :""}
        >{data.para1} </p>
        {<p>{data.para2}</p>}
        {data.para4 && (
          <div className="para4">
            <p>{data.para4}</p>
          </div>
        )}
        <div>
          <span onClick={() => navigate("/contact")} className="contactUs">
            {data.para3}
          </span>
          <span onClick={() => navigate("/contact")} class="material-icons">
            arrow_right_alt
          </span>
        </div>
      </div>
    </div>
  );
};
