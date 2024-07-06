"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import client from "../../../../public/image/Client/ATE.png";
import client1 from "../../../../public/image/Client/JSB.png";
import client2 from "../../../../public/image/Client/Cfbd.png";
import client3 from "../../../../public/image/Client/FAO.png";
import client4 from "../../../../public/image/Client/FTI.png";
import client5 from "../../../../public/image/Client/HAO.png";
import client6 from "../../../../public/image/Client/TMI.png";

const OurClient = () => {
  const items = [
    {
      id: 1,
      img: client,
    },
    {
      id: 2,
      img: client1,
    },
    {
      id: 3,
      img: client2,
    },
    {
      id: 4,
      img: client3,
    },
    {
      id: 5,
      img: client4,
    },
    {
      id: 6,
      img: client5,
    },
    {
      id: 7,
      img: client6,
    },
  ];

  return (
    <div className="py-16 bg-white md:px-24 px-8">
      <h1 className=" vigaRegular text-5xl text-[#2C2A77] py-3">Our Clients</h1>
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-7 gap-8 pt-12">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="relative bg-[#003249] rounded-sm shadow-lg overflow-hidden cursor-pointer"
            whileHover={{
              backgroundColor: "#10B981", // Change to desired hover color
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            <div className="relative h-full w-full">
              <Image
                src={item.img}
                alt="Client logo"
                // layout="fill"
                // objectFit="contain"
                width={500}
                height={500}
                className="p-1 "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default OurClient;
