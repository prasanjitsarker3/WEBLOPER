import Image from "next/image";
import React from "react";
import {
  AnimatedButton,
  AnimatedText,
} from "@/components/Animation/AnimatedText ";
import TextAnimation from "@/components/Animation/TextAnimation";

const ServiceWebDevelopment = () => {
  const items = [
    {
      id: 1,
      img: "/image/Banner/web app.gif",
      title: "Ecommerce Development",
    },
    {
      id: 2,
      img: "/image/Banner/erp.gif",
      title: "Wev Development",
    },
    {
      id: 3,
      img: "/image/Banner/web development.gif",
      title: "Wev Application",
    },
    {
      id: 4,
      img: "/image/Banner/Ecommerce.gif",
      title: "ERP Development",
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
                  className="rounded-lg bg-[#009975] transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        <div className=" space-y-6">
          <div className="flex items-center vigaRegular">
            <div className=" md:text-5xl text-3xl primary vigaRegular">
              <TextAnimation title=" WEVLOPER | Technology" />
            </div>
          </div>
          <AnimatedText primaryColor="#2C2A77" secondaryColor="#33B999">
            Website Development
          </AnimatedText>
          <AnimatedText primaryColor="#2C2A77" secondaryColor="#33B999">
            Ecommerce Development
          </AnimatedText>
          <AnimatedText primaryColor="#2C2A77" secondaryColor="#33B999">
            Web Application Development
          </AnimatedText>
          <AnimatedText primaryColor="#2C2A77" secondaryColor="#33B999">
            ERP Development
          </AnimatedText>

          <AnimatedButton href="/technology" bg="#009975">
            Explore Technology →
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceWebDevelopment;
