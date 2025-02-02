"use client";

import { featureData } from "../data";
import FeatureCard from "./FeatureCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeatureSlider = () => {
  return (
    <div className="md:max-w-4xl px-4 lg:px-0 lg:max-w-6xl mx-auto my-10 overflow-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1.6,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        {featureData.map((feature) => (
          <SwiperSlide key={feature.id}>
            <FeatureCard {...feature} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeatureSlider;
