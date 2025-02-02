"use client";
import Image from "next/image";
import girlWithTab from "@/public/girl-with-tab.jpg";
import backgroundShape from "@/public/background.png";
import foregroundShape from "@/public/foreground.png";
import growth from "@/public/growth.png";
import creditCard from "@/public/credit-card.png";
import bank from "@/public/bank.png";
import { motion } from "motion/react";

const TechPerson = ({ containerStyle }: { containerStyle?: string }) => {
  return (
    <div className={`relative ${containerStyle}`}>
      <Image
        src={girlWithTab}
        alt="girl with tab"
        className="shadow-lg  w-[80%] object-cover mx-auto relative z-10"
      />
      <div
        className="absolute w-full h-full top-0 inset-0"
        style={{
          transform: "translate3d(0%, -4.82327%, 0px)",
          transition: "transform 2500ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          animationFillMode: "forwards",
        }}
      >
        <Image
          className="object-cover w-full h-full overflow-visible "
          src={backgroundShape}
          alt="background shape"
        />
      </div>
      <div className="absolute h-[50%] w-[50%] z-10 -bottom-[18%] right-[20%]">
        <Image src={foregroundShape} alt="foreground shape" />
      </div>

      {/* Floating images  */}
      <motion.div
        className="absolute top-20 z-20"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image src={creditCard} className="w-[90%] h-[90%]" alt="credit card" />
      </motion.div>

      <motion.div
        className="absolute top-48 left-16 z-20"
        animate={{
          y: [0, -7, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image src={growth} className="w-[90%] h-[90%]" alt="growth shape" />
      </motion.div>
      <motion.div
        className="absolute top-20 -right-2 z-20"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
      >
        <Image src={bank} className="w-[90%] h-[90%]" alt="bank " />
      </motion.div>
    </div>
  );
};

export default TechPerson;
