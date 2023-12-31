import React from "react";
import { Hero } from "../../footer/Hero";

import "./style.scss";
import { VideoPoster } from "./videoPoster";
import { Vendor } from "./vendor";
const videoUrl =
  "https://static.showit.co/file/gpJbU70-Qu2XTfNxNPOtCg/129082/naomi_and_peter_header_v4.mp4";

export const NaomiAndPeter = () => {
  return (
    <div className="stories-container">
      <Hero types={"nav"} />
      <VideoPoster videoUrl={videoUrl} />
      <Vendor />
    </div>
  );
};
