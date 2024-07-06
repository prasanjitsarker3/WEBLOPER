import Image from "next/image";
import React from "react";
import firs1 from "../../../../public/image/Banner/graphics design.gif";
import firs2 from "../../../../public/image/Banner/ui ux design.gif";
import firs3 from "../../../../public/image/Banner/wordpress design.gif";
import firs4 from "../../../../public/image/Banner/video editing.gif";
import Link from "next/link";
import {
  AnimatedButton,
  AnimatedText,
  AnimatedTextCus,
} from "@/components/Animation/AnimatedText ";
import TextAnimation from "@/components/Animation/TextAnimation";

const ServiceStudio = () => {
  const items = [
    {
      id: 1,
      img: firs1,
      title: "Graphics Design",
    },
    {
      id: 2,
      img: firs2,
      title: "Wordpress Development",
    },
    {
      id: 3,
      img: firs3,
      title: "Video Editing",
    },
    {
      id: 4,
      img: firs4,
      title: "UX / UX",
    },
  ];
  const getHeightClass = (index: number) => {
    return index === 0 || index === 3 ? "h-40" : "h-60";
  };
  return (
    <div className="md:px-24 px-6 mx-auto">
      <div className="grid md:grid-cols-2 gap-12 py-20">
        <div className=" space-y-6">
          <div className="flex items-center text-justify">
            <div className=" md:text-5xl text-3xl primary vigaRegular">
              <TextAnimation title=" WEVLOPER | Studio" />
            </div>
          </div>

          {/* <h1 className=" text-[#2C2A77] md:text-5xl text-3xl text-justify font-rubik font-normal">
            Graphics Design
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl text-justify  font-normal">
            Wordpress Design
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Video Editing
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            UI / UX
          </h1> */}
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#E86252">
            Graphics Design
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#E86252">
            Wordpress Design
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#E86252">
            Video Editing
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#E86252">
            UI / UX
          </AnimatedTextCus>
          <AnimatedButton href="/studio" bg="#E86252">
            Explore Studio →
          </AnimatedButton>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {items.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center group"
            >
              <div
                className={`${getHeightClass(index)} relative w-full ${
                  index === 2 ? "-mt-20" : "mt-0"
                } overflow-hidden`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg bg-[#E86252] transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* <h1 className=" -mt-8 pb-3 text-center text-white font-semibold z-50">
                {item.title}
              </h1> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStudio;
