"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import banner1 from "../../../../public/image/banner1-demo.png";
import Image from "next/image";

const Banner = () => {
  const items = [
    {
      id: 1,
      bgImage: banner1,
      title: "Home Page Information",
      heading: "Creating home page information",
    },
    {
      id: 2,
      bgImage:
        "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "About Page Information",
      heading: "Creating About Page information etc",
    },
    {
      id: 3,
      bgImage:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038903.jpg?t=st=1717790031~exp=1717793631~hmac=10917f4a8badbb2b18253db57c2db61c70e49a2aada36dcb232248417959d392&w=740",
      title: "Service Page Information",
      heading: "Creating Service Page information etc",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, 9000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handleButtonClick = (index: any) => {
    setCurrentIndex(index);
  };

  const currentItem = items[currentIndex || 0];

  return (
    <div className="relative h-screen w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentItem.id}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-700"
          style={{
            backgroundImage: `url('${currentItem.bgImage}')`,
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 2 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.001 }} // Set duration to 2 seconds
        >
          <div className="text-white flex items-center absolute inset-0 bg-black bg-opacity-10 backdrop-blur-sm">
            <motion.div
              key={currentItem.id + "-content"}
              className="space-y-3 md:px-24"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <p className="text-2xl leading-relaxed vigaRegular ">
                {currentItem.title}
              </p>
              <p className="text-xl leading-relaxed viga-regular">
                {currentItem.heading}
              </p>
              <div className="w-40">
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative">
                  <span>Explore Now →</span>
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-0 w-full flex justify-center gap-4 py-2">
        <button
          onClick={() => handleButtonClick(0)}
          className={`border ${
            currentIndex === 0
              ? "border-blue-500 border-none"
              : "border-yellow-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 0 ? "bg-blue-500" : "bg-yellow-300"
            }`}
          ></div>
          Home
        </button>
        <button
          onClick={() => handleButtonClick(1)}
          className={`border ${
            currentIndex === 1
              ? "border-blue-500 border-none"
              : "border-yellow-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 1 ? "bg-blue-500" : "bg-yellow-300"
            }`}
          ></div>
          About
        </button>
        <button
          onClick={() => handleButtonClick(2)}
          className={`border ${
            currentIndex === 2
              ? "border-blue-500  border-none"
              : "border-yellow-300 border-none"
          }  px-3 text-white rounded-md flex items-center gap-2`}
        >
          <div
            className={`w-3 h-3 rounded-full ${
              currentIndex === 2 ? "bg-blue-500" : "bg-yellow-300"
            }`}
          ></div>
          Service
        </button>
      </div>
    </div>
  );
};

export default Banner;
