import React from "react";
import { FeatureType } from "../data/features";

const FeatureCard: React.FC<FeatureType> = ({
  color,
  description,
  icon,
  title,
}) => {
  return (
    <div className="bg-[#F8FCFF] p-8 rounded-[20px] max-w-96">
      <div
        className={` p-4 rounded-full inline-block `}
        style={{
          backgroundColor: color,
        }}
      >
        {icon}
      </div>
      <h2 className="text-2xl mt-6 font-semibold">{title}</h2>
      <p className="mt-6 text-[#164377] text-base">{description}</p>
    </div>
  );
};

export default FeatureCard;
