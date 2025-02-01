"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import SectionHeading from "./SectionHeading";
import "swiper/css";
import Image from "next/image";
import { slidData } from "../data";

const FutureFinance: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  const handleButtonClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div className="text-center">
        <SectionHeading
          title="The future of finance"
          subTitle="TECHNOLOGY BUILT FOR YOU"
        />
      </div>

      <div>
        <div className="hidden md:grid  md:grid-cols-2 lg:grid-cols-4 gap-x-4 my-8">
          {slidData.map((slid, index) => (
            <button
              key={slid.id}
              className={`py-3 rounded-full text-lg font-medium capitalize transition-all duration-100 cursor-pointer 
                ${
                  activeIndex === index
                    ? "bg-blue-500 text-white"
                    : " text-blue-500 hover:bg-blue-50"
                }
              `}
              onClick={() => handleButtonClick(index)}
            >
              {slid.subTitle}
            </button>
          ))}
        </div>

        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
        >
          {slidData.map((slid) => (
            <SwiperSlide key={slid.id}>
              <div className="bg-white rounded-2xl shadow-lg p-16 grid grid-cols-1 md:grid-cols-2 gap-x-10 h-full mb-5 min-h-[500px]">
                <div>
                  <SectionHeading
                    subTitle={slid.subTitle}
                    title={slid.title}
                    styleTitle="text-2xl! lg:text-4xl! my-6"
                  />
                  <p className="font-medium">{slid.paragraphOne}</p>
                  <br />
                  <p>{slid.paragraphTwo}</p>
                </div>
                <div className="relative">
                  <Image
                    src={slid.img}
                    fill
                    className="object-cover rounded-lg object-center"
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default FutureFinance;
