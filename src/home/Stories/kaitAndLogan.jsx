import React from "react";
import { Hero } from "../../footer/Hero";
import { VideoPoster } from "./videoPoster";
import { Vendor } from "./vendor";

export const KaitAndLogan = () => {
  const videoUrl =
    "//static.showit.co/file/EbwJNnolTOmkE-OHJXEdAA/129082/header.mp4";
  return (
    <div className="stories-container">
      <Hero types={"nav"} />
      <VideoPoster videoUrl={videoUrl} />
      <Vendor />
    </div>
  );
};
