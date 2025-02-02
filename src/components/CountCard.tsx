import React from "react";
import Count from "./Count";
import { countCards } from "../data";

const CountCard = () => {
  return (
    <div className="max-w-md md:max-w-6xl mx-auto my-8 px-6 xl:px-0">
      {/* Heading Section */}
      <p className="uppercase text-blue-500 font-medium tracking-wide text-lg text-center">
        TRUSTED BY THE BEST
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6 px-4 md:px-0">
        {countCards.map(({ id, prefix, count, suffix, details }) => (
          <div
            key={id}
            className="text-center border-b border-dashed border-blue-500 lg:border-none flex items-center justify-between py-6 lg:py-0 lg:block"
          >
            {/* Count Display */}
            <h2 className="text-6xl lg:text-8xl font-bold bg-gradient-to-b from-[#1F80F0] to-[#0057BB] text-transparent bg-clip-text">
              {prefix}
              <Count {...count} />
              {suffix}
            </h2>

            {/* Card Description */}
            <p className="text-center mt-4 text-lg tracking-wide text-gray-800">
              {details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountCard;
