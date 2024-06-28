"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner1 from "../../../../public/image/banner1-demo.png";
import banner2 from "../../../../public/image/download.gif";
import banner3 from "../../../../public/image/download (2).gif";
import Image from "next/image";

const gradientAnimation = {
  initial: {
    backgroundPosition: "0% 50%",
  },
  animate: {
    backgroundPosition: "200% 50%",
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Banner = () => {
  const items = [
    {
      id: 1,
      bgImage: banner1,
      title: "Innovative Solutions",
      heading:
        "Leading the way in technological advancements with groundbreaking solutions tailored to meet the unique needs of our clients.",
    },
    {
      id: 2,
      bgImage: banner2,
      title: "About Page Information",
      heading: "Creating About Page information etc",
    },
    {
      id: 3,
      bgImage: banner3,
      title: "Service Page Information",
      heading: "Creating Service Page information etc",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === items.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 12000);

  //   return () => clearInterval(interval);
  // }, [items.length]);

  const handleButtonClick = (index: any) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex || 0];

  return (
    <div className="relative h-screen w-full">
      <div>
        <div
          key={currentItem.id}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-700"
        >
          <Image
            src={currentItem.bgImage}
            alt={currentItem.title}
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          />
          <div className="text-black flex items-center absolute inset-0 bg-black bg-opacity-50">
            {/* Make all text full brightness no opacity */}
            <div
              key={currentItem.id + "-content"}
              className="space-y-3 md:px-24 px-8"
            >
              {/* <p className="text-5xl leading-relaxed text-[#009975] vigaRegular brightness-125 font-bold">
                {currentItem.title}
              </p> */}
              <motion.h1
                className="text-6xl leading-relaxed  vigaRegular brightness-125 font-bold"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #009975, #1BCA9B , #218F76)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {currentItem.title}
              </motion.h1>
              <div className=" md:pr-72">
                <p className="text-2xl text-white leading-relaxed igaRegular brightness-125 font-bold">
                  {currentItem.heading}
                </p>
              </div>
              <div className="w-40  brightness-125">
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
                  <span>Explore Now →</span>
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-center gap-1 py-2">
        <button
          onClick={() => handleButtonClick(0)}
          className={`border ${
            currentIndex === 0
              ? "border-blue-500 border-none"
              : "border-gray-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 0 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          Technology
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={`border ${
            currentIndex === 1
              ? "border-blue-500 border-none"
              : "border-gray-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 1 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          Digital
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`border ${
            currentIndex === 2
              ? "border-blue-500  border-none"
              : "border-yellow-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2 brightness-125`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 2 ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></div>
          Studio
        </button>
      </div>
    </div>
  );
};

export default Banner;
