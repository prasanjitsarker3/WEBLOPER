"use client";
import React from "react";
import Image from "next/image";
import banner from "../../assests/Frame 1 (4).png";
import Link from "next/link";

const ServiceGallery = () => {
  const items = [
    {
      id: 1,
      img: "https://img.freepik.com/free-photo/hand-holding-smartphone-social-media-concept_23-2150208245.jpg?t=st=1718543869~exp=1718547469~hmac=81a39c2671ff48bf73d5000c7745e1f02b061b75af6b57bd421d6ab107ec1579&w=740",
      title: "Digital Marketing",
    },
    {
      id: 2,
      img: "https://img.freepik.com/free-vector/social-media-elements-cloud-shape_23-2147820051.jpg?t=st=1718543983~exp=1718547583~hmac=96e563027d35e53f6f51947a95e2dc2ca636811745f5309c0777be39ebc75b0b&w=740",
      title: "Social Media Marketing",
    },
    {
      id: 3,
      img: "https://img.freepik.com/premium-photo/business-team-collaboration-discussing-working-analyzing-with-financial-data-marketing-growth-report-graph-team-presentation-brainstorming-strategy-planning-making-profit-company_265022-75176.jpg?w=740",
      title: "Business Analysis",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h1 className=" -mt-8 pb-3 text-center text-white font-semibold z-50">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
        <div className=" space-y-6">
          <div className="flex gap-6 items-center">
            <h1 className=" md:text-5xl text-3xl primary viga-regular">
              WEVLOPER |
            </h1>
            <h1 className=" text-[#2C2A77] md:text-4xl text-4xl viga-regular">
              Digital
            </h1>
          </div>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Digital Marketing
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Social Media Marketing
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Business Analysis
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Research & Analysis
          </h1>
          <Link href={"/digital"}>
            <button className="px-4 py-2 backdrop-blur-sm border bg-[#2C2A77] border-emerald-500 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Explore Now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceGallery;
