"use client";
import TooltipsUser from "@/components/CustomPage/TooltipsUser";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const TeamMentor = () => {
  const [index, setIndex] = useState(0);
  const colors = [
    { bg: "#FFD4EE", text: "#2C2A77" },
    { bg: "#D3FEE8", text: "#2C2A77" },
    { bg: "#D9D3FF", text: "#2C2A77" },
    { bg: "#C5E8FF", text: "#2C2A77" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => getRandomIndex(prevIndex));
    }, 5000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getRandomIndex = (currentIndex: any) => {
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
      newIndex = Math.floor(Math.random() * colors.length);
    }
    return newIndex;
  };

  return (
    <div className=" py-20 md:px-24 px-8">
      <div className="w-full flex flex-col md:flex-row gap-12">
        <div className=" md:w-1/2 w-full mx-auto">
          <div className=" space-y-5">
            <div>
              <h1 className=" vigaRegular text-5xl text-[#2C2A77]">
                Want to join
              </h1>
              <h1 className=" vigaRegular text-5xl text-[#2C2A77]">Wevloper</h1>
            </div>
            <h1 className=" text-xl font-exotwo font-medium text-slate-800 text-justify">
              Wevloper offers a dynamic career path that emphasizes creative
              flexibility, job stability, and a collaborative environment. With
              options for remote work and career advancement, Wevloper is a
              rewarding option for aspiring developers.
            </h1>
            <button className="px-4 py-2 backdrop-blur-sm border border-emerald-500/20 bg-[#2a286e] transition-colors duration-500 text-white mx-auto text-center rounded-full relative">
              <Link href="/technology">
                <span>Explore More →</span>
              </Link>
              <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 w-full mx-auto bg-[#003249] p-6 rounded-md shadow">
          <div className=" space-y-5 ">
            <h1 className=" vigaRegular text-4xl text-white">
              MEET THE MANAGEMENT TEAM
            </h1>
            <h1 className=" font-exotwo text-xl font-medium text-white">
              They are regarded as the pioneer of wevloper, spearheading its
              inception and early growth with visionary leadership and
              innovative strategies.
            </h1>
            <TooltipsUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMentor;
