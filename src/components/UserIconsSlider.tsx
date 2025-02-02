"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ourUsers } from "../data";
import Image from "next/image";

const UserIconsSlider = () => {
  return (
    <div className="block md:hidden px-4">
      <Swiper spaceBetween={10} slidesPerView={3} wrapperTag="div">
        {ourUsers.map((user) => (
          <SwiperSlide
            key={user.id}
            className="flex justify-center items-center"
          >
            <Image
              src={user.img}
              width={150}
              height={120}
              alt="user image"
              key={user.id}
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserIconsSlider;
