"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Technology = () => {
  const frontTech = [
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    "https://cdn-icons-png.flaticon.com/128/226/226777.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
    "https://cdn-icons-png.flaticon.com/128/919/919836.png",
    "https://www.svgrepo.com/show/354200/postgresql.svg",
    "https://cdn-icons-png.flaticon.com/128/5968/5968350.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968381.png",
  ];
  const backTech = [
    "https://cdn-icons-png.flaticon.com/128/3334/3334886.png",
    "https://www.svgrepo.com/show/342062/next-js.svg",
    "https://www.svgrepo.com/show/452093/redux.svg",
    "https://www.svgrepo.com/show/452075/node-js.svg",
    "https://www.svgrepo.com/show/373554/django.svg",
    "https://www.svgrepo.com/show/452088/php.svg",
    "https://www.svgrepo.com/show/331488/mongodb.svg",
    "https://www.svgrepo.com/show/452075/node-js.svg",
  ];
  return (
    <div className=" md:px-24 px-8 bg-[#F8FBFE] py-12 space-y-12">
      <h1 className=" text-3xl vigaRegular text-[#003249]">Technologies</h1>
      <Marquee
        className=" w-full"
        pauseOnHover={true}
        gradient={true}
        speed={20}
        gradientColor="#F8FBFE"
      >
        <div className="w-full flex justify-between gap-8 md:gap-16">
          {frontTech.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="" width={70} height={70} />
            </div>
          ))}
        </div>
      </Marquee>
      <Marquee
        className=" w-full"
        pauseOnHover={true}
        gradient={true}
        direction="right"
        speed={20}
        gradientColor="#F8FBFE"
      >
        <div className="w-full flex justify-between gap-8 md:gap-16">
          {backTech.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="" width={70} height={70} />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Technology;
