import React from "react";
import { Poster } from "../poster";
import { Hero } from "../footer/Hero";
import { Poster2 } from "../poster2";
import "./press.scss";
import { PressGallery } from "./pressGallery";

const posterData = [
  {
    img: "https://static.showit.co/1600/8xOctfv3TKKVrs4y94urLQ/129082/cropped_07--tiesto-wedding.jpg",
    text0: "LE RÊVE FILMS",
    text1: "PRESS",
    text2: `
      Over the last decade, their award-winning work has been featured in People, Martha Stewart Weddings, Harper’s BAZAAR, Vogue, BRIDES, iHeart Radio, The Knot, Style Me Pretty, and more. Le Rêve Films has captured events and created content for clients like DJ Tiesto, Ashley and Jared from the Bachelor Nation, Engage!, The Knot, Marcy Blum Associates, Kleinfeld Bridal, and other high-profile celebrities, musicians, and athlete`,
  },
  {
    cl0: "poster",
    cl1: "poster-desc",
    cl2: "about-us",
    cl3: "about-text-1s fsN",
    cl4: "about-text-2s width64",
    clBlackLayer: "remove",
  },
];
const posterData2 = [
  {
    img: "https://static.showit.co/1600/5uy_2UNjTRiys1h2XipuNg/129082/6dscf4127_copy.jpg",
    para1: "Let's make magic",
    para2: "together",
    para3: "Inquire about your date",
    clSize: "height80vh",
  },
];
const pressGalleryData = [
  {
    img: "https://static.showit.co/800/ZYDEiAp9RRWDlYzODXmDeQ/129082/vo0223_naomicover_copy.jpg",
    date: `November 22 2022`,
    heading: `VOGUE FEATURE: NAOMI BIDEN ON HER WHITE HOUSE WEDDING`,
    desc: `Over the weekend, Naomi Biden, the eldest granddaughter of
    President Biden, wed her husband Peter Neal on the South
    Lawn of the White House.`,
  },
  {
    img: "https://static.showit.co/800/boEm1A8-SdOWKLs4XeAWeA/129082/o-tobias-harris-wedding-8722-75cb497943d44a5a864d55c27f6bec63.jpg",
    date: `AUGUST 7, 2022`,
    heading: `PEOPLE FEATURE: TOBIAS HARRIS & JASMINE WINTON`,
    desc: `NBA Star Tobias Harris Weds Jasmine Winton at a New York Castle: 'She Just Opened My Eyes Up`,
  },
  {
    img: "https://static.showit.co/800/cXHY_3bLSvyR0jMvtAqG-Q/129082/bachelors-emily-ferguson-william-karlsson-are-married-photos-04.jpg",
    date: `JULY 24, 2022`,
    heading: `US WEEKLY FEATURE: EMILY FERGUSON & GOLDEN KNIGHTS HOCKEY STAR WILLIAM KARLSSON`,
    desc: `Inside ‘Bachelor’ Alum Emily Ferguson and William Karlsson’s Wedding: ‘I’m Marrying My Dream Guy’`,
  },
  {
    img: "https://static.showit.co/800/rTN4kMExQb6vjZrlBfoUpw/129082/the-bachelors-haley-ferguson-and-oula-palve-are-married-after-las-vegas-wedding-see-the-romantic-photos-04.jpg",
    date: `JUNE 12, 2022`,
    heading: `US WEEKLY FEATURE:
    HALEY FERGUSON & OULA PALVE `,
    desc: `The Bachelor’s Haley Ferguson and Oula Palve Are Married After Las Vegas Wedding: See the Romantic Photos`,
  },
  {
    img: "https://static.showit.co/800/beg8a8p7SPe1XNibkoEO-A/129082/220330_micaela_1160.jpg",
    date: `APRIL 6, 2022`,
    heading: `VOGUE FEATURE:
    CELEBRITY STYLIST MICAELA ERLANGER AND MAC OSBOURNE`,
    desc: `Stylist Micaela Erlanger Wore Custom Prada for Her Wedding at Miami’s Vizcaya Museum and Gardens`,
  },
  {
    img: "https://static.showit.co/1600/Bowy9fuwQpGBYmRStfT6ZQ/129082/casey_brad_synced_00_01_54_01_still005.jpg",
    date: `NOVEMBER 12, 2020`,
    heading: `BRIDES FEATURE: A GLAMOROUS WEDDING AT THE PARKER PALM SPRINGS`,
    desc: `A Glamorous Wedding Featuring a Canopy of Twinkle Lights at the Parker Palm Springs`,
  },
  {
    img: "https://static.showit.co/800/ST2mWMOYS0-Fi_NkuEWB7g/129082/20191005_allanzepeda_12688.jpg",
    date: `FEBRUARY 12, 2020`,
    heading: `VOGUE FEATURE: RICKIE FOWLER AND ALLISON STOKKE`,
    desc: `Inside Pro Golfer Rickie Fowler and Pole Vaulter Allison Stokke’s Romantic Wedding in Mexico`,
  },
  {
    img: "https://static.showit.co/2400/ANZjDZ-ETKSIz85LGrhwFg/129082/kait_and_logan_4_24_1-topaz-enhance-faceai.jpg",
    date: `JANUARY 21, 2020`,
    heading: `BAZAAR'S LITTLE BLACK BOOK`,
    desc: `BAZAAR’s Little Black Book: The Top Wedding Videographers in the World`,
  },
  {
    img: "https://static.showit.co/800/22mTmg4ESG-uS4bqsAOmhQ/129082/18--tiesto-wedding.jpg",
    date: `SEPTEMBER 23, 2019`,
    heading: `VOGUE FEATURE: DJ TIESTO AND ANNIKA BACKES`,
    desc: `DJ Tiësto Gets Married in the Middle of the Utah Desert`,
  },
  {
    img: "https://static.showit.co/800/B9bjbrVKTISDR_V5SzD-8w/129082/ashley_and_jared.jpg",
    date: `AUGUST 14, 2019`,
    heading: `PEOPLE FEATURE: ASHLEY IACONETTI AND JARED HAIBON`,
    desc: `Ashley Iaconetti Says Husband Jared Haibon Crying at Their Wedding Was the ‘Pinnacle’ of Her Life`,
  },
  {
    img: "https://static.showit.co/800/IIH4v80wTLSiumVR-tJ8Zw/129082/image_1.jpg",
    date: `AUGUST 1,2019`,
    heading: `MARTHA STEWART FEATURE: BOHEMIAN DESERT WEDDING`,
    desc: `This Bohemian Desert Wedding in Palm Springs Featured Plenty of Art Deco Details`,
  },
];

export const Press = () => {
  return (
    <div className="press-container">
      <Hero types={"nav"} />
      <Poster posterData={posterData} com={"press"} />
      <div className="largerScreen">
        {pressGalleryData.map((val, ind) => {
          if (ind % 2 === 0) {
            return <PressGallery order={"desc"} ind={ind} val={val} />;
          } else {
            return <PressGallery order={"img"} ind={ind} val={val} />;
          }
        })}
      </div>
      <div className="smallerScreen">
        {pressGalleryData.map((val, ind) => {
            return <PressGallery order={"img"} ind={ind} val={val} />;
        })}
        </div>
      <Poster2 data={posterData2[0]} />
    </div>
  );
};
