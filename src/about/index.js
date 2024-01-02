import { Hero } from "../footer/Hero";
import { Poster } from "../poster";
import { Poster2 } from "../poster2";
import "./about.scss";
import { AboutUs } from "./aboutUs";

const missionDesc = [
  {
    desc: `We value the personalities of our clients and letting them shine on film.`,
    heading: "PERSONAL",
  },
  {
    desc: `We value an event's true essence so that clients can revisit a feeling while watching.`,
    heading: "GENUINE",
  },
  {
    desc: `We’re all about capturing the big moments of roaring joy and the small moments of quiet euphoria.`,
    heading: "EMOTIONAL",
  },
  {
    desc: `We’re in touch with our feelings and the feelings of those around us, enabling us to capture all things beautiful and authentic.`,
    heading: "INTUITIVE",
  },
  {
    desc: `We value the underlying joy and fun that makes our films come to life, and we seek to infuse the feeling of celebration into our work.`,
    heading: "PLAYFUL",
  },
];

const posterData = [
  {
    img: "https://static.showit.co/1600/41SlV5bHQRKbQxACvHvsUg/129082/lauradee_engage17_day3_cocktailhour_054-topaz-enhance-faceai.jpg",
    text0: "About Us",
    text1: "Behind the Lens",
    text2: `Named by Harper's BAZAAR as one of the top wedding videographers
  in the world`,
  },
  {
    cl0: "poster",
    cl1: "poster-desc",
    cl2: "about-us",
    cl3: "about-text-1",
    cl4: "about-text-2",
  },
];
const posterData2 = [
  {
    img: "https://static.showit.co/1600/ANZjDZ-ETKSIz85LGrhwFg/129082/kait_and_logan_4_24_1-topaz-enhance-faceai.jpg",
    para1:"Up Next:",
    para4: `THINK WE MIGHT BE A GOOD FIT? TAKE A LOOK AT SOME OF OUR
    RECENT FILMS:`,
    // para2: "beautiful",
    para3: "Contact Us",
  clSize:"height80vh"
  }
];
export const About = () => {
  return (
    <div className="about">
      <Hero types={"nav"} />

      <Poster posterData={posterData} />

      <div className="AboutUs">
        <AboutUs />
      </div>
      <div className="about-desc-3">
        <div className="outer-div">
          <div className="inner-div">
            <p>
              Our clients are seekers of beauty, lovers of travel, genuinely
              passionate, with a taste for champagne and celebration
            </p>
          </div>
        </div>
      </div>
      <div className="mission-philosophy">
        <div className="mission-container">
          <div className="mission-inner-container">
            <div className="mission-image-container">
              <div className="mission-image-1">
                <img
                  src="https://static.showit.co/1200/RazGEfIFSRyg7oteydrxIA/129082/nj_002_5_24_1-topaz-denoise-enhance-sharpen.jpg"
                  alt="mission-img3"
                />
              </div>
              <div className="mission-image-2">
                <img
                  src="https://static.showit.co/400/KsoDfoc5QqueAqPJYNFhuA/129082/lp_7526.jpg"
                  alt="mission-img2"
                />
              </div>
              <div className="mission-image-3">
                <img
                  src="https://static.showit.co/800/70Rcoz7fS96TIf-KSUfyEQ/129082/haley_and_oula_004_5_71_1_1_-topaz-denoise-enhance-faceai.jpg"
                  alt="mission-img1"
                />
              </div>
              <a href="https://www.instagram.com/lerevefilms/">
                <button className="insta">FOLLOW@LEREVEFILMS</button>
              </a>
            </div>
          </div>
          <div className="mission-inner-container">
            <div className="mission-desc">
              <div className="mission-text-0">
                <p>OUR MISSION AND PHILOSOPHY</p>
                <div className="lines"></div>
              </div>
              <div className="mission-text-1">
                <p>
                  To distill both the physical beauty and the intangible emotion
                  of our clients’ weddings into one stunning film. We want every
                  film to be a dream our couples can revisit. We take a laid
                  back approach that puts our couples at ease and makes them
                  comfortable enough to live the biggest day of their lives in
                  front of our cameras.
                </p>
              </div>
              <div className="mission-text-2">
                <p>we prioritize and value being...</p>
              </div>

              <div className="mission-text-3">
                {missionDesc.map((val, ind) => {
                  return (
                    <div key={`desc${ind}`}>
                      <p className="mission-text-3-heading">{val.heading}</p>
                      <p className="mission-text-3-desc">{val.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Poster2 data={posterData2[0]}/>
    </div>
  );
};


// .poster-2 {
//   height: 80vh;
//   .poster-2-desc {
//     width: 1200px;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     transform: translate(-50%, -50%);
//     .poster-2-desc-2 {
//       height: 300px;
//       width: 46%;
//       color: #fff;
//       display: flex;
//       flex-flow: column;
//       align-items: center;
//       .poster-2-text-1 {
//         transform: rotate(-3deg);
//         p {
//           font-family: gustera;
//           font-size: 3rem;
//           line-height: 120px;
//           letter-spacing: 4px;
//         }
//       }
//       .poster-2-text-2 {
//         margin-top: 20px;
//         a {
//           text-decoration: none;
//           color: #fff;
//           p {
//             font-family: kenjo I;
//             font-size: 25px;
//             line-height: 38px;
//             text-align: center;
//           }
//         }
//       }
//       .poster-2-text-3 {
//         margin-top: 20px;
//         a {
//           text-decoration: none;
//           color: white;
//           display: flex;
//           flex-direction: row;
//           align-items: center;
//           justify-content: center;
//           gap: 10px;
//           p {
//             font-family: aRegular;
//             font-size: 11px;
//             line-height: 10px;
//           }
//         }
//       }
//     }
//   }
// }
