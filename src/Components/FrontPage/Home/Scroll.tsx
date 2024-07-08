import Image from "next/image";
import React from "react";

const Scroll = () => {
  const content = [
    {
      title: "Collaborative Editing",
      img: "/image/New Banner/caseF.png",
    },
    {
      title: "Real time changes",
      img: "/image/New Banner/case 2.3.png",
    },
    {
      title: "Version control",
      img: "/image/New Banner/case 1.1.png",
    },
    {
      title: "Running out of content",
      img: "/image/New Banner/Frame 19 (2).png",
    },
  ];

  return (
    <div className="md:px-24 md:py-24 py-12">
      <div className="md:h-[30rem] relative overflow-y-auto scroll-hide flex flex-col md:flex-row justify-center w-full">
        <div className="rounded-md sticky top-10 md:overflow-hidden md:w-1/2 ">
          <div className="space-y-3 md:text-left text-center">
            <h1 className="text-2xl  text-[#009975] space-x-5">CASE STUDIES</h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              We do digital
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              transformation
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              We envision
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              building a new
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              future by
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
              harnessing the
            </h1>
            <h1 className="md:text-5xl text-3xl font-bold space-x-6 text-[#009975] vigaRegular">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scroll;
