"use client";
import React from "react";
import { motion } from "framer-motion";

const CompanyData = () => {
  const data = [
    {
      id: 1,
      title: "3 +",
      heading: "Years",
    },
    {
      id: 2,
      title: "83 %",
      heading: "Return Customers",
    },
    {
      id: 3,
      title: "4 +",
      heading: "Countries",
    },
    {
      id: 4,
      title: "& Much More",
      heading: "View Work History",
    },
  ];

  const colors = ["#FFD4EE", "#D3FEE8", "#D9D3FF", "#C5E8FF"];

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="py-20 md:px-24 px-8">
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 w-full mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="vigaRegular md:text-5xl text-3xl text-[#009975]">
                Let the numbers{" "}
              </h1>
              <h1 className="vigaRegular md:text-5xl text-3xl text-[#009975] pt-2">
                speak
              </h1>
            </div>
            <h1 className="font-exotwo font-medium md:text-2xl text-xl text-slate-800 text-justify">
              36 months the average time of our partnership with clients. We are
              proud of 500+ cases and have experience with 200+ technologies,
              languages, platforms, libraries, and frameworks.
            </h1>
            <button className="px-4 py-2 backdrop-blur-sm border border-emerald-500/20 bg-[#2a286e] transition-colors duration-500 text-white mx-auto text-center rounded-full relative">
              <span>Explore More →</span>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <div className=" grid grid-cols-2 gap-5">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-6 rounded-lg ${
                  item.id === 2 || item.id === 4 ? "mt-8" : "mb-8"
                }`}
                style={{ backgroundColor: getRandomColor() }}
                whileHover={{ backgroundColor: "#f0f0f0", scale: 1.05 }}
              >
                <h1 className="text-3xl font-bold text-[#2a286e]">
                  {item.title}
                </h1>
                <h1 className="text-xl text-slate-800">{item.heading}</h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
