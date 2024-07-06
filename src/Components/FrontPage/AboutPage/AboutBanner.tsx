import Image from "next/image";
import React from "react";
import aboutBanner from "../../../../public/image/Banner/U.gif";
import TextAnimation from "@/Components/Animation/TextAnimation";

const AboutBanner = () => {
  return (
    <div className=" h-screen md:px-24 px-8 md:pt-0 pt-24 bg-[#F8FBFE]">
      <div className="w-full h-full flex flex-col md:flex-row md:gap-12 gap-6 items-center">
        <div className=" md:w-1/2 w-full flex items-center ">
          <div className="space-y-5">
            <div className=" vigaRegular md:text-5xl text-4xl text-[#2C2A77]">
              {/* <h1>RISING FROM</h1> */}
              <TextAnimation title="RISING FROM" />
              <TextAnimation title="LOCAL ORIGINS TO" />
              <TextAnimation title="  GLOBAL." />
              {/* <h1 className=" vigaRegular md:text-5xl text-4xl text-[#2C2A77] py-2">
                LOCAL ORIGINS TO
              </h1>
              <h1 className=" vigaRegular md:text-5xl text-4xl text-[#2C2A77]">
                GLOBAL.
              </h1> */}
            </div>
            <p className=" md:text-xl text-xl font-medium font-exotwo text-slate-800">
              Wevloper is a team of specialists dedicated to delivering
              top-notch digital services, known for meticulous attention to
              detail and flawless execution, ensuring your vision is brought to
              life.
            </p>
            <button className=" py-3 px-8 bg-[#2C2A77] text-white rounded-3xl uppercase">
              Webloper about us
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 w-full ">
          <div className=" relative h-full w-full">
            <Image
              src={aboutBanner}
              alt={"Main"}
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
