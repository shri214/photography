import { Hero } from "../footer/Hero";
import { Poster } from "../poster";
import { Poster2 } from "../poster2";
import { GridGallery } from "./gallery";
import "./portfolio.scss";
import { Quotes } from "./quotes";
import { SmallPhotoGrid } from "./smallPhotoGrid";

const posterData = [
  {
    img: "https://static.showit.co/1600/3-OV3BA9Qji6_fKJY7QPCg/129082/jenny_and_sho_08_5_71_1.jpg",
    text1: `portfolio`,
    text2: `OUR STYLE IS EMOTIVE, FILLED WITH BRIGHT AND NATURAL IMAGERY, AND FOCUSED ON THE REAL ESSENCE OF EACH EVENT.`,
  },
  {
    cl0: "poster",
    cl1: "poster-desc",
    cl3: "about-text-1 fs",
    cl4: "about-text-2",
  },
];
const poster2Data = [
  {
    img: "https://static.showit.co/1600/jAXJhki6R2yfu5d6BuddLg/129082/katrina_chris-1201.jpg",
    para1: "Let's create something",
    para2: "beautiful",
    para3: "Inquire About Your Date",
    clFixed:"fix" ,
    clSize:"size"
  },
];
export const Portfolio = () => {
  return (
    <div className="portfolio">
      <Hero types={"nav"} />
      <Poster posterData={posterData} />
      <GridGallery />
      <Quotes />
      <SmallPhotoGrid />
      <Poster2 data={poster2Data[0]}/>
    </div>
  );
};
