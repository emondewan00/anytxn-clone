import React from "react";
import { InfoCardType } from "../data";

const InfoCard: React.FC<InfoCardType> = ({
  subTitle,
  title,
  paragraph,
  subTitleColor = "text-blue-500",
  containerStyle = "",
  cardStyle = "",
}) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <div
        className={`shadow-xl shadow-[#D4E8F3] p-4 rounded bg-white ${cardStyle}`}
      >
        <p className={`${subTitleColor} uppercase font-semibold`}>{subTitle}</p>
        <h2 className="text-heading text-xl md:text-2xl font-semibold">
          {title} hello
        </h2>
      </div>
      <p className="text-slate-400 text-sm mt-4 px-4 text-pretty">
        {paragraph}
      </p>
    </div>
  );
};

export default InfoCard;