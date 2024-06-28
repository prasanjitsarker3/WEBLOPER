import Image from "next/image";
import React from "react";
import firs1 from "../../../../public/image/graphics.png";
import firs2 from "../../../../public/image/ui ux.png";
import firs3 from "../../../../public/image/video.png";
import firs4 from "../../../../public/image/wordpress.png";
import Link from "next/link";

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
          <div className="flex gap-6 items-center text-justify">
            <h1 className=" md:text-5xl text-3xl primary vigaRegular">
              WEVLOPER |
            </h1>
            <h1 className=" text-[#2C2A77] md:text-5xl text-4xl vigaRegular">
              Studio
            </h1>
          </div>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl text-justify font-rubik font-normal">
            Graphics Design
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl text-justify font-rubik font-normal">
            Wordpress Design
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            Video Editing
          </h1>
          <h1 className=" text-[#2C2A77] md:text-5xl text-3xl font-rubik font-normal">
            UI / UX
          </h1>
          <Link href={"/studio"}>
            <button className="px-4 py-2 backdrop-blur-sm border bg-[#2C2A77] border-emerald-500 text-white mx-auto text-center rounded-full relative mt-4">
              <span>Explore Now →</span>
              <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
            </button>
          </Link>
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
                  className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
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
