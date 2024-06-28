import Image from "next/image";
import React from "react";
import case1 from "../../../../public/image/Case/case 1.1.png";
import case2 from "../../../../public/image/Case/case 2.2.png";
import case3 from "../../../../public/image/Case/case 2.3.png";

const Scroll = () => {
  const content = [
    {
      title: "Collaborative Editing",
      img: case1,
    },
    {
      title: "Real time changes",
      img: case2,
    },
    {
      title: "Version control",
      img: case3,
    },
    {
      title: "Running out of content",
      img: case2,
    },
  ];

  return (
    <div className="md:px-24 py-24">
      <div className="md:h-[30rem] relative overflow-y-auto scroll-hide flex flex-col md:flex-row justify-center w-full">
        <div className="rounded-md sticky top-10 md:overflow-hidden md:w-1/2 ">
          <div className="space-y-3 md:text-left text-center">
            <h1 className="text-2xl  text-[#009975] space-x-5">CASE STUDIES</h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              We do are digital
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              transformation
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              We envision
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              building a new
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              future by
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              harnessing the
            </h1>
            <h1 className="text-5xl font-bold space-x-6 text-[#009975] vigaRegular">
              potential of technology
            </h1>
          </div>
        </div>
        <div className="relative pt-10 scroll-hide flex flex-col items-start px-4 md:w-1/2">
          {content.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center group pb-12 rounded-lg"
            >
              <div className=" overflow-hidden h-full w-full rounded-lg">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1000}
                  height={1000}
                  className="rounded-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rounded-lg"
                />
              </div>
              <h1 className=" -mt-8 pb-3 text-center text-white font-semibold z-30  group-hover:text-yellow-500">
                {item.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
