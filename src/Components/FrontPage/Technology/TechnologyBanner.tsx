import Image from "next/image";
import React from "react";
import techBanner from "../../../../public/image/download (8).gif";
import TextAnimation from "@/components/Animation/TextAnimation";

const TechnologyBanner = () => {
  return (
    <div>
      <div className=" h-screen md:px-24 px-8 md:pt-0 pt-24 bg-[#F8FBFE]">
        <div className="w-full h-full flex flex-col md:flex-row  md:gap-12 gap-2 items-center">
          <div className=" md:w-1/2 w-full flex items-center ">
            <div className="space-y-5">
              <div>
                <div className=" vigaRegular md:text-5xl text-3xl ">
                  <TextAnimation title=" Grow up by transforming" />
                </div>
                <div className=" vigaRegular md:text-5xl text-3xl  py-1">
                  <TextAnimation title="your business with" />
                </div>
                <div className=" vigaRegular md:text-5xl text-3xl ">
                  <TextAnimation title=" cutting-edge technologies." />
                </div>
              </div>
              <p className=" md:text-xl text-xl font-medium font-exotwo text-slate-800">
                In this era of digital transformation, where technological
                support is inevitable, start your journey with Wevloper is
                technology solutions to establish a powerful presence in the
                tech realm..
              </p>
            </div>
          </div>
          <div className=" md:w-1/2 w-full ">
            <div className="flex justify-center items-center relative h-60">
              <Image
                src={"/image/download (8).gif"}
                alt={"Main"}
                width={500}
                height={500}
                className=" rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyBanner;
