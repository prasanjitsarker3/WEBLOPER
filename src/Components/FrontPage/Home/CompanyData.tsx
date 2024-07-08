"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const CompanyData = () => {
  const data = [
    {
      id: 1,
      title: "3 +",
      heading: "Years",
    },
    {
      id: 2,
      title: "100 %",
      heading: "Return Customers",
    },
    {
      id: 3,
      title: "50 +",
      heading: "Stack",
    },
    {
      id: 4,
      title: "12 +",
      heading: "Complete Projects",
    },
  ];

  return (
    <div className="py-20 md:px-24 px-8">
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2 w-full mx-auto">
          <div className="space-y-6">
            <div>
              <h1 className="vigaRegular md:text-5xl text-3xl text-[#003249]">
                Let the numbers{" "}
              </h1>
              <h1 className="vigaRegular md:text-5xl text-3xl text-[#003249] pt-2">
                speak
              </h1>
            </div>
            <h1 className="font-exotwo font-medium md:text-2xl text-xl text-slate-800 text-justify">
              We have an amazing 100% customer retention rate since we started.
              We have 50+ technology & design stack which make sure you get your
              preferable stack or technology.
            </h1>
            <button className="px-4 py-2 backdrop-blur-sm border border-emerald-500/20 bg-[#003249] transition-colors duration-500 text-white mx-auto text-center rounded-full relative">
              <Link href="/technology">
                <span>Explore More →</span>
              </Link>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <div className=" grid grid-cols-2 gap-5">
            {data.map((item, index) => (
              <motion.div
                key={item.id}
                className={`p-6 rounded-lg bg-[#003249] ${
                  item.id === 2 || item.id === 4 ? "mt-8" : "mb-8"
                }`}
                whileHover={{ backgroundColor: "#003249", scale: 1.05 }}
              >
                <h1 className="text-3xl font-bold text-white">{item.title}</h1>
                <h1 className="text-xl text-white">{item.heading}</h1>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyData;
