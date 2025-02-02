"use client";
import React from "react";
import { type FeatureType } from "../data";
import { motion } from "motion/react";

const FeatureCard: React.FC<FeatureType> = ({
  color,
  description,
  icon,
  title,
}) => {
  return (
    <motion.div
      initial={{
        y: "100%",
      }}
      animate={{
        y: "0%",
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      className="bg-[#F8FCFF] p-8 rounded-[20px] max-w-96 h-full"
    >
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
    </motion.div>
  );
};

export default FeatureCard;
