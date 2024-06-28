import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className=" h-screen md:px-24 px-8 md:pt-0 pt-24 bg-gradient-to-b from-[#80a7dd] to-[#F9FCFE]">
      <div className="w-full h-full flex flex-col md:flex-row items-center">
        <div className=" md:w-1/2 w-full flex items-center ">
          <div className="space-y-5">
            <div>
              <h1 className=" vigaRegular md:text-6xl text-4xl text-[#2C2A77]">
                RISING FROM
              </h1>
              <h1 className=" vigaRegular md:text-6xl text-4xl text-[#2C2A77] py-2">
                LOCAL ORIGINS TO
              </h1>
              <h1 className=" vigaRegular md:text-6xl text-4xl text-[#2C2A77]">
                GLOBAL.
              </h1>
            </div>
            <p className=" md:text-xl text-xl font-medium font-exotwo text-slate-800">
              Wevloper is a team of specialists dedicated to delivering
              top-notch digital services, known for meticulous attention to
              detail and flawless execution, ensuring your vision is brought to
              life.
            </p>
            <button className=" py-3 px-8 bg-[#2C2A77] text-white rounded-3xl uppercase">
              Webloper about us
            </button>
          </div>
        </div>
        <div className=" md:w-1/2 w-full ">
          <div className=" grid grid-cols-2  h-full gap-2 px-12">
            <div className="" style={{ borderRadius: "0px 100px 30px 0px" }}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"Main"}
                width={500}
                height={500}
                className=""
                style={{ borderRadius: "0px 120px 0px 0px" }}
              />
            </div>
            <div className="" style={{ borderRadius: "0px 100px 30px 0px" }}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"Main"}
                width={500}
                height={500}
                className=""
                style={{ borderRadius: "120px 0px 0px 0px" }}
              />
            </div>
            <div className="" style={{ borderRadius: "0px 100px 30px 0px" }}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"Main"}
                width={500}
                height={500}
                className=""
                style={{ borderRadius: "0px 0px 0px 120px" }}
              />
            </div>
            <div className="" style={{ borderRadius: "0px 100px 30px 0px" }}>
              <Image
                src={
                  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt={"Main"}
                width={500}
                height={500}
                className=""
                style={{ borderRadius: "0px 30px 0px 0px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
