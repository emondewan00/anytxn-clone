"use client";
import Image from "next/image";
import hero from "@/public/backgrounds/hero.jpg";
import { motion } from "motion/react";

const HeroImage = () => {
  return (
    <div
      className="absolute right-0 top-0 w-[60%] h-full lg:block hidden "
      style={{
        clipPath: "polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)",
      }}
    >
      <motion.div
        initial={{ x: "10%" }}
        animate={{ x: "0%" }}
        transition={{
          delay: 0.5,
          duration: 0.7,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Image className="object-cover h-[115%] w-[115%]" src={hero} alt="" />
      </motion.div>
    </div>
  );
};

export default HeroImage;
