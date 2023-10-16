import React, { useContext } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Links from "@/constant/SliderData";

const Slider = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="flex justify-between items-center w-[97%] text-white text-sm overflow-hidden mt-5 rotate">
      <Swiper
        spaceBetween={10}
        slidesPerView={6}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
        className="relative group text-center cursor-grab border-y border-y-white"
      >
        {Links.map((link) => {
          return (
            <SwiperSlide className="my-2 select-none" key={link.value}>
              <Link href={link.href}>{link.value}</Link>
            </SwiperSlide>
          );
        })}
        <div className="h-full tranition-all duration-300 top-0 absolute z-[2] button-prev-slide left-0  bg-gradient-to-r from-[#0f0f0f] to-transparent w-[60px] cursor-auto flex justify-start items-center">
          <BsArrowLeft className="text-2xl my-0.5" />
        </div>
        <div className="h-full tranition-all duration-100 top-0 absolute z-[2] button-next-slide right-0 bg-gradient-to-l from-[#0f0f0f] to-transparent w-[60px] flex justify-end items-center cursor-auto">
          <BsArrowRight className="text-2xl my-0.5" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
