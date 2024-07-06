"use client";
import React from "react";
import Image from "next/image";
import banner from "../../assests/Frame 1 (4).png";
import Link from "next/link";
import digital from "../../../../public/image/Banner/research and development.gif";
import socail from "../../../../public/image/Banner/digital marketing.gif";
import busn from "../../../../public/image/Banner/social media marketing.gif";
import research from "../../../../public/image/Banner/business analysis.gif";
import {
  AnimatedButton,
  AnimatedTextCus,
} from "@/components/Animation/AnimatedText ";
import TextAnimation from "@/components/Animation/TextAnimation";

const ServiceGallery = () => {
  const items = [
    {
      id: 1,
      img: digital,
      title: "Digital Marketing",
    },
    {
      id: 2,
      img: socail,
      title: "Social Media Marketing",
    },
    {
      id: 3,
      img: busn,
      title: "Business Analysis",
    },
    {
      id: 4,
      img: research,
      title: "Research",
    },
  ];

  const getHeightClass = (index: number) => {
    return index === 0 || index === 3 ? "h-40" : "h-60";
  };

  return (
    <div className="md:px-24 px-6 mx-auto">
      <div className="grid md:grid-cols-2 gap-12 py-24">
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
                  className="rounded-lg bg-[#003249] transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" space-y-6">
          <div className="flex items-center">
            <div className="  md:text-5xl text-3xl primary viga-regular">
              <TextAnimation title=" WEVLOPER |  Digital" />
            </div>
            {/* <h1 className=" text-[#2C2A77] md:text-5xl text-4xl viga-regular"></h1> */}
          </div>

          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#003249 ">
            Digital Marketing
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#003249 ">
            Social Media Marketing
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#003249 ">
            Business Analysis
          </AnimatedTextCus>
          <AnimatedTextCus primaryColor="#2C2A77" secondaryColor="#003249 ">
            Research & Analysis
          </AnimatedTextCus>
          <AnimatedButton href="/digital" bg="#003249">
            Explore DIgital→
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
