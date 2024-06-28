"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const DigitalTimeline = () => {
  const items = [
    {
      id: 1,
      title: "Digital Marketing",
      heading:
        "We conduct an initial assessment to understand what the User Requirements are.",
      img: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      heading:
        "We work with our Studios Team to create wireframes and mockups and then build and engineer the system.",
      img: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Business Analysis",
      heading:
        "We have internal and customer stakeholders converge on a pre-release and pre-MVP system, delivering incremental functionality in sprints.",
      img: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Research & Analysis",
      heading:
        "We have internal and customer stakeholders converge on a pre-release and pre-MVP system, delivering incremental functionality in sprints.",
      img: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleButtonClick = (index: any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-24 md:px-24 ">
      <h1 className="text-3xl vigaRegular text-yellow-500 mb-8">
        Digital Marketing Services Timeline
      </h1>
      <div className="flex justify-center mb-8">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => handleButtonClick(index)}
            className={`mx-1 px-2 py-2 rounded-lg ${
              currentIndex === index
                ? " border-b-2 border-yellow-400 text-yellow-400 bg-none"
                : " text-gray-700"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="flex justify-center w-3/4 gap-12 mb-8">
          <div className="w-[25%]">
            <Image
              width={500}
              height={500}
              src={items[currentIndex].img}
              alt={items[currentIndex].title}
              className="w-64 h-64 object-cover mb-4"
            />
          </div>
          <div className="w-[75%] h-64 flex flex-col flex-1">
            <h2 className="text-2xl font-bold mb-2">
              {items[currentIndex].id}. {items[currentIndex].title}
            </h2>
            <p className="text-lg">{items[currentIndex].heading}</p>

            <div className="flex gap-12 w-full mx-auto mt-auto">
              <button
                onClick={handlePrevious}
                className="bg-yellow-500 text-white h-12 w-12 rounded-full flex items-center justify-center"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="bg-yellow-500 text-white  h-12 w-12 rounded-full flex items-center justify-center"
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTimeline;
