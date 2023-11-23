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
    <div
      className={`flex justify-between items-center w-[97%] ${
        theme === "dark" ? "text-text_primary" : "text-text_secondary font-bold"
      } text-sm overflow-hidden mt-5`}
    >
      <Swiper
        slidesPerView={7}
        loop={true}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        modules={[Navigation]}
        className={`relative group text-center cursor-grabbing ${
          theme === "dark"
            ? "border-y border-y-light_primary"
            : "border-y-2 border-y-dark_primary"
        } `}
        breakpoints={{
          320: { slidesPerView: 2 },
          480: { slidesPerView: 4 },
          640: { slidesPerView: 5 },
        }}
      >
        {Links.map((link) => {
          return (
            <SwiperSlide className="my-3 select-none" key={link.value}>
              <Link href={link.href}>{link.value}</Link>
            </SwiperSlide>
          );
        })}
        <div
          className={`h-full cursor-pointer tranition-all duration-300 top-0 absolute z-[2] button-prev-slide left-0  bg-gradient-to-r ${
            theme === "dark" ? "from-dark_primary" : "from-light_primary"
          } to-transparent w-[100px] cursor-auto flex justify-start items-center`}
        >
          <BsArrowLeft className="text-2xl my-0.5" />
        </div>
        <div
          className={`h-full cursor-pointer tranition-all duration-100 top-0 absolute z-[2] button-next-slide right-0 bg-gradient-to-l ${
            theme === "dark" ? "from-dark_primary" : "from-light_primary"
          } to-transparent w-[100px] flex justify-end items-center cursor-auto`}
        >
          <BsArrowRight className="text-2xl my-0.5" />
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
