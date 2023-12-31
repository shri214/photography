import React from "react";
import { Hero } from "../../footer/Hero";
import { VideoPoster } from "./videoPoster";
import { Vendor } from "./vendor";

export const RealWeddingsTeaser = () => {
  const videoUrl =
    "//static.showit.co/file/khLmfKEZTfy6Hy1-A4f6JQ/129082/harpers_reel_header.mp4";
  return (
    <div className="stories-container">
      <Hero types={"nav"} />
      <VideoPoster videoUrl={videoUrl} />
      <Vendor />
    </div>
  );
};
