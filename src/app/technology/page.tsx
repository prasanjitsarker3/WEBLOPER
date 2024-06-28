import TechTimeLine from "@/Components/FrontPage/Technology/TechTimeLine";
import TechnologyTabs from "@/Components/FrontPage/Technology/TechnologyTabs";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Technology",
  description: "We provide technology service",
};

const TechnologyPage = () => {
  return (
    <div>
      <div className="h-screen flex items-center  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">
        <div className=" text-white md:px-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-1 animate-fade-in vigaRegular">
            Making the future happen
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in vigaRegular">
            faster faster.
          </h1>
          <p className="text-lg md:text-2xl mb-2 animate-fade-in">
            Offering expertise in consulting to create sustainable and
            cost-effective solutions with a
          </p>
          <p className="text-lg md:text-2xl mb-8 animate-fade-in">
            global perspective solutions with a global perspective.
          </p>
          <button className="px-4 py-2 backdrop-blur-sm border bg-[#2C2A77] border-emerald-500 text-white mx-auto text-center rounded-full relative mt-4">
            <span>Explore Now →</span>
            <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </button>
        </div>
      </div>

      <div className=" py-24 w-full md:px-24 px-6">
        <div className=" md:w-1/2 w-full space-y-5">
          <h1 className=" text-5xl vigaRegular font-semibold text-[#2C2A77] ">
            Enabling Digital Change
          </h1>
          <p className=" text-xl font-rubik  text-slate-800">
            Our consulting vertical provides a diverse range of services ranging
            from automation to cybersecurity. Each is led by highly qualified
            and experienced professionals equipped with the expertise to solve
            any problem.
          </p>
        </div>
      </div>
      <TechnologyTabs />
      <TechTimeLine />
    </div>
  );
};

export default TechnologyPage;
