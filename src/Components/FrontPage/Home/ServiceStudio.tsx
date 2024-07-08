import Image from "next/image";
import React from "react";

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
      img: "/image/Studio/GraphicsDesign.gif",
      title: "Graphics Design",
    },
    {
      id: 2,
      img: "/image/Studio/WordPressDevelopment.gif",
      title: "Wordpress Development",
    },
    {
      id: 3,
      img: "/image/Studio/VideoEditing.gif",
      title: "Video Editing",
    },
    {
      id: 4,
      img: "/image/Studio/UiUxDesign.gif",
      title: "UX / UX",
    },
  ];
  const getHeightClass = (index: number) => {
    return index === 0 || index === 3 ? "h-40" : "h-60";
  };
  return (
    <div className="md:px-24 px-6 mx-auto">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 py-20">
        <div className=" space-y-6">
          <div className="flex items-center text-justify">
            <div className=" md:text-5xl text-3xl primary vigaRegular">
              <TextAnimation title=" WEVLOPER | Studio" />
            </div>
          </div>

          <AnimatedTextCus primaryColor="#003249" secondaryColor="#003249">
            Graphics Design
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#003249" secondaryColor="#003249">
            Wordpress Design
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#003249" secondaryColor="#003249">
            Video Editing
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#003249" secondaryColor="#003249">
            UI / UX
          </AnimatedTextCus>
          <AnimatedButton href="/studio" bg="#003249">
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
                  className="rounded-lg  transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStudio;
