"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
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
    <section className="max-w-[480px] md:max-w-[80%] lg:max-w-6xl mx-auto px-8 xl:px-0">
      {/* Heading Section */}
      <div className="text-center lg:mb-12">
        <SectionHeading
          title="The future of finance"
          subTitle="TECHNOLOGY BUILT FOR YOU"
        />
      </div>

      <div>
        {/* Button Navigation for Larger Screens */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
          {slidData.map((slid, index) => (
            <button
              key={slid.id}
              className={`py-3 rounded-full text-lg font-medium capitalize transition-all duration-100 cursor-pointer 
                ${
                  activeIndex === index
                    ? "bg-blue-500 text-white"
                    : "text-blue-500 hover:bg-blue-50"
                }
              `}
              onClick={() => handleButtonClick(index)}
            >
              {slid.subTitle}
            </button>
          ))}
        </div>

        {/* Swiper Component */}
        <Swiper
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={handleSlideChange}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
        >
          {slidData.map((slid) => (
            <SwiperSlide key={slid.id}>
              <div className="bg-white rounded-2xl shadow-lg p-4 md:p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-4 h-full mb-5 lg:min-h-[500px]">
                <div className="space-y-6">
                  <h4
                    className={`text-blue-600 font-semibold uppercase tracking-wide `}
                  >
                    {slid.subTitle}
                  </h4>

                  <h1
                    className={`font-semibold mt-4 text-heading text-pretty text-2xl lg:text-4xl my-6`}
                  >
                    {slid.title}
                  </h1>
                  <div className="relative mt-4 block md:hidden">
                    <Image
                      src={slid.img}
                      width={300}
                      height={200}
                      className="object-cover rounded-lg object-center w-full h-full"
                      alt="image"
                    />
                  </div>

                  <p className="font-medium text-base md:text-lg">
                    {slid.paragraphOne}
                  </p>
                  <p className="text-base md:text-lg">{slid.paragraphTwo}</p>
                </div>
                {/* image container  */}
                <div className="relative mt-4 lg:mt-0 hidden md:block">
                  <Image
                    src={slid.img}
                    width={400}
                    height={300}
                    className="object-cover rounded-lg object-center w-full h-full"
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
