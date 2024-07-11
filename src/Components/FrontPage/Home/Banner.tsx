"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import tech from "../../../../public/image/MainBanner/TechnologyBanner.gif";
import studio from "../../../../public/image/MainBanner/Studio Banner -new.gif";
import digital from "../../../../public/image/MainBanner/Digital Banner New.gif";

const Banner = () => {
  const items = [
    {
      id: 1,
      bgImage: "/image/MainBanner/HomeBanner-New.gif",
      title: "Welcome to WEVLOPER",
      link: "/",
      heading:
        "Leading the way in technological advancements with groundbreaking solutions tailored to meet the unique needs of our clients.",
    },
    {
      id: 2,
      bgImage: tech,
      title: "WEVLOPER Technology",
      link: "/technology",
      heading:
        "Wevloper Technology focuses on innovative business solutions, offering web development, mobile app creation, and custom software services to enhance digital experiences.",
    },
    {
      id: 3,
      bgImage: studio,
      title: "WEVLOPER Studio",
      link: "/studio",
      heading:
        "Wevloper Studio specializes in UI/UX design, WordPress website development, and graphic design, creating visually appealing and user-friendly digital solutions.",
    },
    {
      id: 4,
      bgImage: digital,
      title: "WEVLOPER Digital",
      link: "digital",
      heading:
        "Wevloper Digital excels in digital marketing, social media marketing, business analysis, and research & development, driving business growth through innovative strategies.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 11000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleButtonClick = (index: any) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex || 0];

  return (
    <div className="relative h-screen w-full">
      <div>
        <div
          key={currentItem.id}
          className="absolute h-screen inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-700"
        >
          <Image
            src={currentItem.bgImage}
            alt={currentItem.title}
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          />

          <div className="text-black flex items-center absolute inset-0 bg-black bg-opacity-30">
            <div
              key={currentItem.id + "-content"}
              className="space-y-3 md:px-24 px-8"
            >
              <motion.h1
                className="md:text-6xl text-4xl leading-relaxed  vigaRegular brightness-125 font-bold"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #00F260, #0575E6, #00F260)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentItem.title}
              </motion.h1>
              <div className=" md:pr-72">
                <p className="md:text-2xl text-xl text-white leading-relaxed igaRegular brightness-125 font-bold">
                  {currentItem.heading}
                </p>
              </div>
              <div className="w-40  brightness-125">
                <Link href={currentItem.link}>
                  <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
                    <span>Explore Now →</span>
                    <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex  justify-center md:gap-1 py-2">
        <button
          onClick={() => handleButtonClick(0)}
          className={`border ${
            currentIndex === 0
              ? "border-blue-500 border-none"
              : "border-gray-300 border-none"
          }  md:px-3 px-1 text-white rounded-md flex items-center md:gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 0 ? "bg-[#009975]" : "bg-gray-300"
            }`}
          ></div>
          Home
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={`border ${
            currentIndex === 1
              ? "border-blue-500 border-none"
              : "border-gray-300 border-none"
          }  md:px-3 px-1 text-white rounded-md flex items-center md:gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 1 ? "bg-[#009975]" : "bg-gray-300"
            }`}
          ></div>
          Technology
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`border ${
            currentIndex === 2
              ? "border-blue-500 border-none"
              : "border-gray-300 border-none"
          }  md:px-3 px-1 text-white rounded-md flex items-center md:gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 2 ? "bg-[#009975]" : "bg-gray-300"
            }`}
          ></div>
          Studio
        </button>
        <button
          onClick={() => handleButtonClick(3)}
          className={`border ${
            currentIndex === 3
              ? "border-blue-500  border-none"
              : "border-yellow-300 border-none"
          }  md:px-3 px-1 text-white rounded-md flex items-center md:gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 3 ? "bg-[#009975]" : "bg-gray-300"
            }`}
          ></div>
          Digital
        </button>
      </div>
    </div>
  );
};

export default Banner;
