import React from "react";
import Count from "./Count";
import { countCards } from "../data";

const CountCard = () => {
  return (
    <div className="max-w-md md:max-w-6xl mx-auto my-8">
      <p className="uppercase text-blue-500 font-medium tracking-wide text-lg text-center">
        TRUSTED BY THE BEST
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-around mt-6 px-4 md:px-0">
        {countCards.map((card) => (
          <div
            key={card.id}
            className="md:last:col-span-2 text-center  lg:last:col-span-1 border-b border-dashed border-blue-500 md:border-none flex items-center justify-between py-6 md:py-0 md:block "
          >
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-b from-[#1F80F0] to-[#0057BB] text-transparent bg-clip-text">
              {card.prefix}
              <Count {...card.count} />
              {card.suffix}
            </h2>
            <p className="text-center mt-4 text-lg tracking-wide text-gray-800">
              {card.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountCard;
