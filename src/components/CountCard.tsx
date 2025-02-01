import React from "react";
import Count from "./Count";

const cards = [
  {
    id: 1,
    prefix: ">",
    details: "Years of Experience",
    count: { endNumber: 20, duration: 1000 },
  },
  {
    id: 2,
    suffix: "+",
    details: "Financial Institutes",
    count: { endNumber: 100, duration: 1000 },
  },
  {
    id: 3,
    prefix: ">",
    suffix: "m",
    details: "Customers Each",
    count: { endNumber: 1000, duration: 1000 },
  },
];

const CountCard = () => {
  return (
    <div className="max-w-6xl mx-auto my-8">
      <p className="uppercase text-blue-500 font-medium tracking-wide text-lg text-center">
        TRUSTED BY THE BEST
      </p>
      <div className="flex justify-around mt-6">
        {cards.map((card) => (
          <div key={card.id}>
            <h2 className="text-8xl font-bold bg-gradient-to-b from-[#1F80F0] to-[#0057BB] text-transparent bg-clip-text">
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
