import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const DigitalTools = () => {
  const digitail = [
    {
      name: "Search Engine Optimization",
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968879.png",
    },
    {
      name: "Social Media Marketing",
      image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    },
    {
      name: "Content Marketing",
      image: "https://cdn-icons-png.flaticon.com/128/6033/6033716.png",
    },
    {
      name: "Email Marketing",
      image: "https://cdn-icons-png.flaticon.com/128/300/300221.png",
    },
    {
      name: "Pay-per-Click Advertising",
      image: "https://cdn-icons-png.flaticon.com/128/12914/12914690.png",
    },
    {
      name: "Influencer Marketing",
      image: "https://cdn-icons-png.flaticon.com/128/3046/3046121.png",
    },
    {
      name: "Affiliate Marketing",
      image: "https://cdn-icons-png.flaticon.com/128/5968/5968872.png",
    },
    {
      name: "Digital Analytics",
      image: "https://cdn-icons-png.flaticon.com/128/3536/3536505.png",
    },
  ];

  return (
    <div>
      <div className=" md:px-24 px-8 bg-[#F8FBFE] py-12 space-y-12">
        <h1 className=" text-3xl vigaRegular text-[#2C2A77]">
          Digital Tools &Technologies
        </h1>
        <Marquee
          className=" w-full"
          pauseOnHover={true}
          gradient={true}
          speed={20}
          gradientColor="#F8FBFE"
        >
          <div className="w-full flex justify-between gap-8 md:gap-16">
            {digitail.map((item, index) => (
              <div key={index}>
                <Image src={item.image} alt="" width={70} height={70} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default DigitalTools;
