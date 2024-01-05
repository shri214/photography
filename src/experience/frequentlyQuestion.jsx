import React from "react";
import "./frequently.scss";
import { useInView } from "react-intersection-observer";

export const FrequentlyQuestion = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const question = [
    {
      q: "WHAT ARE YOUR MINIMUMS & WHAT DOES THE AVERAGE CLIENT SPEND?",
      ans: "We start at a minimum of $25,000, with our average client spending around $30,000.",
    },
    {
      q: "ARE THERE ANY SURPRISE FEES I SHOULD BE AWARE OF?",
      ans: "All fees (travel, shipping, etc.) are built into your custom proposal price. The only time this price will change is if additional services or products are added on after the initial booking.",
    },
    {
      q: "HOW DO WE SCHEDULE A CONSULTATION?",
      ans: "If you’d like to meet over Zoom and talk details, just let us know and we’ll send you a Calendly link to schedule time right on our calendar",
    },
    {
      q: "DO YOU TRAVEL OVERSEAS?",
      ans: "We serve clients all around the world. Traveling overseas to capture everything from engagements, to weddings, to life-style shoots is what we love most.",
    },
    {
      q: "WHO WILL BE FLYING THE DRONE?",
      ans: "Lindsey is a certified remote pilot and takes care of the majority of our aerial footage. If we need an additional filmmaker to fly the drone, we will only bring on other licensed remote pilot.",
    },
  ];
  return (
    <div className="frequently-container">
      <div className="f-outer-container">
        <div className="f-container smaller visibility">
          <div className="f-container-img"></div>
        </div>
        <div className="f-container f-desc">
          <div className="f-heading">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <p className="line"></p>
          </div>
          {question.map((val, ind) => {
            let additionalContent = null;

            if (ind === 2) {
              additionalContent = (
                <div className="hidden smaller">
                  <div className="f-container-img"></div>
                </div>
              );
            }
            return (
              <div key={ind} className="sets">
                <h3 className="question">{val.q}</h3>
                <p className="ans">{val.ans}</p>
                {additionalContent}
              </div>
            );
          })}
        </div>
        <div ref={ref} className="f-container bigger">
          {inView && <div className="f-container-img"></div>}
        </div>
      </div>
    </div>
  );
};
