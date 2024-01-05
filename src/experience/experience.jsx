import React from "react";
import { Hero } from "../footer/Hero";
import { Poster } from "../poster";
import { useInView } from "react-intersection-observer";
import "./review1.scss";
import "./review2.scss";
import "./style.scss";
import { ProcessTree } from "./processTree";
import { Reviews } from "./review2and3";
import { ExperienceCarousel } from "./experieceCarousel";
import { FrequentlyQuestion } from "./frequentlyQuestion";

export const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const posterData = [
    {
      img: "https://static.showit.co/1600/uYsSwoDbTFyz-sxN8PjIsQ/129082/kleinfeldxtulum-681_websize.jpg",
      text0: "THE LE RÊVE FILMS",
      text1: "Experience",
      text2: `
          Reviews from our clients, the process, frequently asked questions, and what exactly makes a Le Rêve Films couple.`,
    },
    {
      cl0: "poster",
      cl1: "poster-desc",
      cl2: "about-us-e",
      cl3: "about-text-1e",
      cl4: "about-text-2e",
      clBlackLayer: "remove",
    },
  ];
  const processData = [
    {
      step0: "01",
      tag0: "proposal",
      desc0:
        "We would love to start off with learning a little bit about you and the anticipated essence of your event. A custom proposal will then be created to ensure we execute your distinctive vision.",
      step1: "02",
      tag1: "personal",
      desc1:
        "About a month before the event, we will touch base with your wedding planner to talk details in depth. Your job is to sit back, relax, and enjoy your last moments together as an engaged couple.",
    },
    {
      step0: "03",
      tag0: "CAPTURE + EVENT DAY",
      desc0:
        "Before your first event, we will spend time filming the destination you chose for your wedding weekend. Once the festivities begin, we will let the story unfold before our cameras, capturing moments both big and small.  We do our best to remain as a fly on the wall, seamlessly blending into your guests around you so that your authentic self will shine on film.",
      step1: "04",
      tag1: "production",
      desc1:
        "The edit of your personalized film begins with a careful selection of licensed music that reflects the emotions of the weekend. After reviewing all the film footage, favorite stand-out audio clips from the weekend are selected and woven together with moving imagery to capture the essence and official story of your film. The end result is a visual tapestry that encapsulates the feeling and atmosphere from your special weekend.",
    },
  ];

  const reviewData = [
    {
      text1: `"We couldn’t be more grateful for the amazing work of Le Rêve Films."`,
      text2: `We were in absolute awe of the beauty, artistry, and pure joy that our
    wedding video captures of the most special day of our lives. The way
    the video captures the intricate details of our venue and the
    beautiful decor, and shows our day unfold with memories of us, our
    families, and friends relishing in each moment is truly incredible.
    Re-watching our wedding video will allow us to relive our wedding day
    and truly re-ignite all of the joy, love, and excitement we felt that
    day for the rest of our lives. We couldn’t be more grateful for the
    amazing work of Le Rêve Films.`,
      text3: "RILEY & CAMERON",
    },
    {
      text1: `"Tears just filled my eyes and I was breathless."`,
      text2: `I don’t know how to express how thankful I am for the both of you... for your creativity, for your love, and for your hard work. We first heard of Le Rêve when we booked our wedding venue and they referred us to them. I watched one of their films and tears just filled my eyes and I was breathless. They captured our love, the love that radiated through all our guests and our entire day. The wait for wedding film was beyond worth it. We were so eager to watch it and they delivered the most magical fairytale wedding video. It was as if we were watching the most romantic movie. Everyone gets a photographer for their day, but one thing photos will never be able to capture are the bursts of tears,
      laughter, and all other reactions you want to remember.
      `,
      text3: "NINA & RYAN",
    },
  ];
  return (
    <div className="experience">
      <Hero types={"nav"} />
      <Poster posterData={posterData} com={"press"} />
      <div className="itsWork">
        <div className="exHeading">
          <h3>How it's work</h3>
          <h1>our process</h1>
        </div>
        <div className="tress">
          {processData.map((val, ind) => {
            return <ProcessTree processData={val} ind={ind} />;
          })}
        </div>
      </div>
      <div className="review1">
        <div className="reviewImg">
          <div className="bigger">
            <img
              src="https://static.showit.co/800/KsoDfoc5QqueAqPJYNFhuA/129082/lp_7526.jpg"
              alt="bigger img"
            />
          </div>
          <div className="smaller">
            <img
              src="https://static.showit.co/800/pMNUhVhDRkCXwxMXS8r1CQ/129082/lp_2004.jpg"
              alt="smaller img"
            />
          </div>
        </div>
        <div className="reviewDesc1">
          <p>
            My husband and I could not feel more lucky to have had Cherish and
            Lindsey with us for our wedding weekend!"
          </p>
        </div>
        <div className="reviewDesc2">
          <p>
            My husband and I could not feel more lucky to have had Cherish and
            Lindsey with us for our wedding weekend! It also feels important to
            share that Le Rêve was part of the plans for our 200 person wedding
            in South Carolina, which (with 30 days notice!) became a 30 person
            wedding in Maine with only our parents and wedding party. This
            change in plans was incredibly tough for us because it meant our
            family members (aunts, uncles, cousins, grandparents, etc.) and
            closest family friends weren’t able to attend the ceremony; HOWEVER,
            within 48 hours, Cherish and Lindsey provided us with a link to the
            full ceremony video so that we could share with those who were
            unable to join us. Our family said the video was a perfect way for
            them to feel included.
          </p>
          <p className="lines"></p>
          <h3>REED & TYLER</h3>
        </div>
      </div>
      <Reviews data={reviewData[0]} types="single" />
      <Reviews data={reviewData[1]} types="double" />
      <div className="review4">
        <p className="desc1">"The whole family is in tears!!!"</p>
        <p className="desc2">
          The whole family is in tears!!! Bravo!!!! Thank you so so much -
          seriously so thankful for your beautiful work and capturing every
          beautiful second. I am crying too hard to send a proper email.
        </p>
        <p className="desc2">THANK YOU!!</p>
        <p className="lines"></p>
        <p className="desc2">KARI & JOHN</p>
      </div>
      <div ref={ref} className="image-container">
        {inView && (
          <>
            <img
              className="smaller"
              src="https://static.showit.co/800/ccRCWHoCQ0qaBE8_yOQjSg/129082/bm_173.jpg"
              alt="smaller img"
            />
            <img
              className="bigger"
              src="https://static.showit.co/1200/JTXIQAY2QTybFIX5DErl2w/129082/bm_347.jpg"
              alt="bigger img"
            />
          </>
        )}
      </div>

      <FrequentlyQuestion />
      <ExperienceCarousel />
      <div className="stories">
        <div className="story">
          <div className="storyContainer end">
            <img
              src="https://static.showit.co/800/5uy_2UNjTRiys1h2XipuNg/129082/6dscf4127_copy.jpg"
              alt="storyImage"
            />
          </div>
          <div className="storyContainer start">
            <div className="texts1">
              <p>Is that you?</p>
            </div>
            <div className="texts2">
              <p className="headings">LET US TELL YOUR LOVE STORY.</p>
              <p className="desc">
                If you're looking for bright and natural imagery mixed with
                emotional storytelling, you're in luck. Let's schedule a
                consultation and see if this is the right fit.
              </p>
            </div>
            <a href="/contact">
              <button className="storyBtn">Inquire with us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
