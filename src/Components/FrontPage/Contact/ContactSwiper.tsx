"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import TextAnimation from "@/Components/Animation/TextAnimation";

const ContactSwiper = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set correct slides per view

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" md:px-24 px-8 bg-[#F8FBFE]">
      <div className=" text-4xl vigaRegular ">
        <TextAnimation title="Why Contact Us" />
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="py-12">
          <div className=" bg-[#003249] p-8 space-y-5 shadow-sm  rounded-sm h-60">
            <h1 className=" text-3xl poppins-semibold text-[#009975]">01</h1>
            <h2 className=" uppercase text-white font-exotwo text-xl">
              Progressiveness
            </h2>
            <h2 className=" text-md  text-white font-exotwo">
              We value advancement which leads us to craft contemporary and
              sustainable solutions.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className="py-12">
          <div className=" bg-[#003249] p-8 space-y-5 shadow-sm  rounded-sm h-60">
            <h1 className=" text-3xl poppins-semibold text-[#009975]">02</h1>
            <h2 className=" uppercase text-white font-exotwo text-xl">
              Inclusiveness
            </h2>
            <h2 className=" text-md text-white font-exotwo">
              We value diversity to foster equality and bring positive change.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" py-12">
          <div className=" bg-[#003249] p-8 space-y-5 shadow-sm  rounded-sm h-60">
            <h1 className=" text-3xl poppins-semibold text-[#009975]">03</h1>
            <h2 className=" uppercase text-white font-exotwo  text-xl">
              Reliability
            </h2>
            <h2 className=" text-md text-white font-exotwo">
              We work with the utmost integrity to keep our commitment preserve
              confidentiality.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" py-12">
          <div className=" bg-[#003249] p-8 space-y-5 shadow-sm  rounded-sm h-60">
            <h1 className=" text-3xl poppins-semibold text-[#009975]">04</h1>
            <h2 className=" uppercase text-white font-exotwo  text-xl">
              Optimum return
            </h2>
            <h2 className=" text-md  text-white font-exotwo">
              We constantly strive to offer a world-class output in the most
              affordable mean.
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" py-12">
          <div className=" bg-[#003249] p-8 space-y-5 shadow-sm  rounded-sm h-60">
            <h1 className=" text-3xl poppins-semibold text-[#009975]">05</h1>
            <h2 className=" uppercase text-white font-exotwo text-xl">
              Quality
            </h2>
            <h2 className=" text-md  text-white font-exotwo">
              We strive for excellence through sincerity ,constant ,innovation
              and refinement.
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ContactSwiper;
