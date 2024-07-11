"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const DigitalCard = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const items = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "We are dedicated to digital transformation. We envision building a new future by harnessing the potential of technology",
      img: "/image/New Banner/Frame_20-removebg-preview.png",
    },
    {
      id: 2,
      title: "Social Media Marketing",
      description:
        "Wevloper leverages digital marketing to enhance brand visibility, engage with clients, and drive business growth through strategic, data-driven online campaigns.",
      img: "https://img.freepik.com/free-photo/full-shot-woman-reading-with-smartphone_23-2149629602.jpg?t=st=1719312921~exp=1719316521~hmac=a6cd86cf55b50adaea975b5d2ad4663529ae5fff2ac5724a38680a286c192018&w=740",
    },
    {
      id: 3,
      title: "Business Analysis",
      description:
        "Wevloper utilizes social media marketing to build brand awareness, engage with the community, and drive customer interaction through targeted, creative content on various social media platforms.",
      img: "https://img.freepik.com/premium-photo/financial-analysts-analyze-business-financial-reports-digital-tablet-planning-investment-project-discussion-meeting-corporate-showing-results-their-successful-teamwork_265022-72314.jpg?w=740",
    },
    {
      id: 4,
      title: "Research & Analysis",
      description:
        "Wevloper employs business analysis to identify client needs, optimize processes, and deliver tailored solutions that drive efficiency, innovation, and growth.",
      img: "https://img.freepik.com/premium-photo/digital-design-businessman-show-increase-market-graphic_35761-546.jpg?w=740",
    },
  ];

  const handleHover = (id: any) => {
    setHoveredId(id);
  };

  const handleHoverOut = () => {
    setHoveredId(null);
  };

  return (
    <div className="py-24 md:px-24 px-6 bg-[#F8FBFE]">
      <motion.div
        className={`grid gap-4 ${
          hoveredId ? "md:grid-cols-5" : "md:grid-cols-4"
        }`}
        layout
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className={`relative overflow-hidden bg-slate-700 ${
              hoveredId === item.id ? "col-span-2" : ""
            }`}
            onMouseEnter={() => handleHover(item.id)}
            onMouseLeave={handleHoverOut}
            layout
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[80vh]">
              <Image
                src={item.img}
                alt={item.title}
                layout="fill"
                objectFit="cover"
              />
              <h2 className="absolute top-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-lg text-white font-bold z-10">
                {item.title}
              </h2>
            </div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
              transition={{ duration: 3 }}
            >
              <div className="text-center text-white vigaRegular px-4 brightness-125">
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalCard;
