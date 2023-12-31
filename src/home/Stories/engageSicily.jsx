import React from "react";
import { Hero } from "../../footer/Hero";
import { Vendor } from "./vendor";
import { VideoPoster } from "./videoPoster";
export const EngageSicily = () => {
  const videoUrl =
    "//static.showit.co/file/lRf5uoyvRMGjyve66f_dMA/129082/engage_header.mp4";
  return (
    <div className="stories-container">
      <Hero types={"nav"} />
      <VideoPoster videoUrl={videoUrl} />
      <Vendor />
    </div>
  );
};
