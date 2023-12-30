import React from "react";
import "./gallery.scss";
import { SmallPhoto } from "./smallPhoto";

const left = [
  {
    url: "https://static.showit.co/1200/IlCO9OavT4S_YeqJrhK1tw/129082/misha_and_dara_8_57_1-topaz-denoise-faceai.jpg",
    desc: "MISHA &amp; DARA's french riviera wedding",
    city: "CANNES FRANCE",
    link: "",
  },
  {
    url: "https://static.showit.co/2400/81MQGOZnQRWUqGbD8t2xFQ/129082/kait_and_logan_4_10_1-topaz-denoise-enhance-faceai.jpg",
    desc: "KAIT & LAGAN'S HAWAIIAN WEDDING",
    city: "LANA'I,HAAWAII",
    link: "",
  },
  {
    url: "https://static.showit.co/1200/yvC8XUtDQS6s6V2rcatnbg/129082/teresa_and_brock_04_3_7_1-topaz-denoise-enhance-faceai.jpg",
    desc: "real weddings compilation by le rêve films",
    city: "WORLDWIDE",
    link: "",
  },
  {
    url: "https://static.showit.co/800/gNbtpdg_SUa6M-9QpLURMg/129082/jasmine_and_tobias_5_1_1-topaz-denoise-enhance-faceai-sharpen.jpg",
    desc: "JASMINE &amp; TOBIAS' EPIC WEDDING",
    city: "OHEKA CASTLE, LONG ISLAND",
    link: "",
  },
];

const right=[
  {
    url: "https://static.showit.co/800/Yq2AsYQrRwKozcRAcaxgtA/129082/naomi_and_peter_02_1_6_2-topaz-denoise-enhance-sharpen.jpg",
    desc: "Naomi &amp; peter's white house wedding",
    city: "washington dc",
    link: "",
  },
  {
    url: "https://static.showit.co/800/PeJ9EBLIRoSRmqys9LzXVg/129082/allanzepedaphoto_00368.jpg",
    desc: "ENGAGE!23 THE SICILY EXPERIENCE",
    city: "TAORMINA, SICILY",
    link: "",
  },
  {
    url: "https://static.showit.co/2400/bQ0R5OtATMeca6JK5DLNBA/129082/jenny_and_sho_10_5_110_1-topaz-denoise-enhance-faceai.jpg",
    desc: "JENNY &amp; SHO'S LAKESIDE WEDDING",
    city: "LAKE COMO, ITALY",
    link: "",
  },
  {
    url: "https://static.showit.co/800/bILEmvI2RGChxGJ4bIbqkQ/129082/fergie_twins_v2_5_5_1-topaz-enhance-1_6x-faceai.jpg",
    desc: "THE FERGIE TWINS BACK TO BACK WEDDINGS",
    city: "LAS VEGAS, NEVADA",
    link: "",
  },
]
export const GridGallery = () => {
  return (
    <div className="galleryGrid">
      <div className="galleryHeading">
        <p className="heading">FEATURED VIDEOS</p>
        <p className="line"></p>
        <p className="desc">
          <a href="/press">
            Browse our latest films. For more featured weddings, click here to
            visit our press page.
          </a>
        </p>
      </div>
      <div className="photoGrid">
        <div className="grid-left">
          {left.map((val, ind) => {
            if (ind % 2 === 0) {
              console.log(ind);
              return (
                <SmallPhoto
                  imgUrl={val.url}
                  description={val.desc}
                  city={val.city}
                  ind={ind}
                  cl={`small leftSmall${ind}`}
                />
              );
            } else {
              return (
                <SmallPhoto
                  imgUrl={val.url}
                  description={val.desc}
                  city={val.city}
                  ind={ind}
                  cl={`big leftBig${ind}`}
                />
              );
            }
          })}
        </div>
        <div className="grid-right">
        {right.map((val, ind) => {
            if (ind % 2 !== 0) {
              console.log(ind);
              return (
                <SmallPhoto
                  imgUrl={val.url}
                  description={val.desc}
                  city={val.city}
                  ind={ind}
                  cl={`small rightSmall${ind}`}
                />
              );
            } else {
              return (
                <SmallPhoto
                  imgUrl={val.url}
                  description={val.desc}
                  city={val.city}
                  ind={ind}
                  cl={`big rightBig${ind}`}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
