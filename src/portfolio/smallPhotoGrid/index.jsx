import React from "react";
import { ImageSize } from "./imageSize";
import "./imageSize.scss";

const ImageData = [
  {
    img: "https://static.showit.co/400/ZYDEiAp9RRWDlYzODXmDeQ/129082/vo0223_naomicover_copy.jpg",
    logo: "https://static.showit.co/400/Qyz4QKE5RsmYq7QXRDwPVA/129082/white_vogue.png",
  },
  {
    img: "https://static.showit.co/400/Km-SMFzfQmuEprAgfUNNLQ/129082/20191005_allanzepeda_12688.jpg",
    logo: "https://static.showit.co/400/Qyz4QKE5RsmYq7QXRDwPVA/129082/white_vogue.png",
  },
  {
    img: "https://static.showit.co/400/xZjr2FDwT72n7Xm1NSl8uQ/129082/kleinfeldxtulum-126.jpg",
    logo: "https://static.showit.co/400/9rN6ZHX9SmeL4BUpxmeFIA/129082/273-2734932_harpers-bazaar-logo-harpers-bazaar-clipart.png",
  },
  {
    img: "https://static.showit.co/400/B9bjbrVKTISDR_V5SzD-8w/129082/ashley_and_jared.jpg",
    logo: "https://static.showit.co/200/ojb409zZRf250CcG8T1agA/129082/white_people.png",
  },
  {
    img: "https://static.showit.co/400/IIH4v80wTLSiumVR-tJ8Zw/129082/image_1.jpg",
    logo: "https://static.showit.co/400/1MnWw-K3QDC_jDK_nUjh_A/shared/marthastewart.png",
  },
  {
    img: "https://static.showit.co/800/xbbHXq9MQzW--hhjk0b1sA/129082/18--tiesto-wedding.jpg",
    logo: "https://static.showit.co/400/Qyz4QKE5RsmYq7QXRDwPVA/129082/white_vogue.png",
  },
];

export const SmallPhotoGrid = () => {
  return (
    <div className="imageSize">
      <div className="small-container">
        <div className="image-container">
          {ImageData.map((val, ind) => {
            if (ind % 2 === 0) {
              return <ImageSize size={"bigger"} val={val} ind={ind} />;
            } else {
              return <ImageSize size={"smaller"} val={val} ind={ind} />;
            }
          })}
        </div>
        <div className="small-container-desc">
          <h1>AS SEEN IN</h1>
          <div className="line"></div>
          <p>
            Over the last decade, their award-winning work has been featured in
            Vogue, People, BRIDES, Martha Stewart Weddings, iHeart Radio, and
            has earned them a spot among Harper’s BAZAAR’s list of The Top
            Wedding Videographers in the World. They have had the privilege of
            capturing events for clients like Naomi Biden, Sean McVay, DJ
            Tiesto, and other high-profile celebrities, musicians and athletes.
          </p>
        </div>
      </div>
    </div>
  );
};
