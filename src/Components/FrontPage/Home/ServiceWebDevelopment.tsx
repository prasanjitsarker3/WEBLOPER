import Image from "next/image";
import Link from "next/link";
import React from "react";
import ecom from "../../../../public/image/Banner/web app.gif";
import web from "../../../../public/image/Banner/erp.gif";
import erp from "../../../../public/image/Banner/web development.gif";
import application from "../../../../public/image/Banner/Ecommerce.gif";
import {
  AnimatedButton,
  AnimatedText,
} from "@/Components/Animation/AnimatedText ";
import TextAnimation from "@/Components/Animation/TextAnimation";

const ServiceWebDevelopment = () => {
  const items = [
    {
      id: 1,
      img: ecom,
      title: "Ecommerce Development",
    },
    {
      id: 2,
      img: web,
      title: "Wev Development",
    },
    {
      id: 3,
      img: erp,
      title: "Wev Application",
    },
    {
      id: 4,
      img: application,
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

          {/* <h1 className=" text-[#2C2A77] md:text-4xl text-3xl font-rubik font-normal">
            Website Development
          </h1>
          <h1 className=" text-[#2C2A77] md:text-4xl text-3xl font-rubik font-normal">
            Ecommerce Development
          </h1>
          <h1 className=" text-[#2C2A77] md:text-4xl text-3xl font-rubik font-normal">
            Web Application Development
          </h1>
          <h1 className=" text-[#2C2A77] md:text-4xl text-3xl font-rubik font-normal">
            ERP Development
          </h1>
          <Link href={"/technology"}>
            <button className="px-4 py-2 backdrop-blur-sm border bg-[#2C2A77] border-emerald-500 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Explore Now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ServiceWebDevelopment;
