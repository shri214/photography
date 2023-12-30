import React, { useEffect, useState } from "react";

export const Quotes = () => {
  const [visibleQuote, setVisibleQuote] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleQuote((prev) => (prev === 1 ? 2 : 1));
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="quotes">
      <div className={visibleQuote === 1 ? "quotes1" : "quotes1 hide"}>
        <p className="quotes1-text">
          "As I watched their film, tears just filled my eyes and I was
          breathless.."
        </p>
        <p className="author">— FROM NINA AND RYAN</p>
      </div>
      <div className={visibleQuote === 2 ? "quotes1" : "quotes1 hide"}>
        <p className="quotes1-text">
          "Jessica's eye is absolutely unparalleled in the industry. We can't
          get enough of her work!
        </p>
        <div className="line"></div>
        <p className="author">— MARTHA STEWART</p>
      </div>
    </div>
  );
};
