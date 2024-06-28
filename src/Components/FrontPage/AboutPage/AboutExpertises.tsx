import {
  BookOpen,
  Building2,
  Figma,
  FileLineChart,
  FileVideo,
  Globe,
  Key,
  Music,
  Paintbrush,
  Shirt,
  ShoppingCart,
  SquareCode,
  TvMinimalPlay,
} from "lucide-react";
import React from "react";

const AboutExpertises = () => {
  const items = [
    {
      id: 1,
      title: "Software",
      icon: <SquareCode />,
    },
    {
      id: 2,
      title: "UI/UX",
      icon: <Figma />,
    },
    {
      id: 3,
      title: "E-commerce",
      icon: <ShoppingCart />,
    },
    {
      id: 4,
      title: "Digital",
      icon: <TvMinimalPlay />,
    },
    {
      id: 5,
      title: "Photo/Video",
      icon: <FileVideo />,
    },
    {
      id: 6,
      title: "Start Up",
      icon: <Building2 />,
    },
    {
      id: 7,
      title: "Real Estate",
      icon: <FileLineChart />,
    },
    {
      id: 8,
      title: "Fashion & Apparel",
      icon: <Shirt />,
    },
    {
      id: 9,
      title: "Music",
      icon: <Music />,
    },
    {
      id: 10,
      title: "Art",
      icon: <Paintbrush />,
    },
    {
      id: 11,
      title: "Education",
      icon: <BookOpen />,
    },
    {
      id: 12,
      title: "Travel",
      icon: <Globe />,
    },
  ];

  const colors = ["#FFD4EE", "#D3FEE8", "#D9D3FF", "#C5E8FF", "#FFEECF"];

  return (
    <div className="md:px-24 py-16 bg-[#F8FBFE] rounded">
      <div className="py-5">
        <h1 className="vigaRegular text-[#2C2A77] text-3xl text-center">
          Our Industry Expertises
        </h1>
        <h1 className="font-exotwo text-xl text-center md:px-16 px-8">
          Our deep understanding of diverse industries empowers us to design
          customized software solutions. Let our expertise be the catalyst for
          your next triumph.
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-12 pt-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className=" shadow-md p-4 rounded"
            style={{ backgroundColor: colors[index % colors.length] }}
          >
            <div className="flex flex-col items-center justify-center">
              <div className="text-4xl mb-2 text-[#2C2A77]">{item.icon}</div>
              <h2 className="font-exotwo text-2xl text-center text-slate-800">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutExpertises;
