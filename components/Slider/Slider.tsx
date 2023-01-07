import React, { useRef, useEffect } from "react";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import { Swiper as SwiperType, Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

type Props = {
  data: string[];
};

const Slider = ({ data }: Props) => {
  const swiperRef = useRef<SwiperType>();

  return (
    <div className="flex flex-row h-auto bg-darkBlue text-white mt-20">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        freeMode={true}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mr-0"
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 2500,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                backgroundColor: "transparent",
                marginRight: "0",
              }}
            >
              <div className="w-36 px-4 xl:px-0 cursor-pointer">
                <Image
                  src={item}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full mr-0 bg-darkBlue opacity-50"
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-between mr-8 pl-8">
        <button
          className="font-light text-5xl text-[#9D9C97] mr-1"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          &larr;
        </button>

        <button
          className="font-light text-5xl text-[#9D9C97] ml-1"
          onClick={() => swiperRef.current?.slideNext()}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Slider;
