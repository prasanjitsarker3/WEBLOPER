import Image from "next/image";
import React from "react";

const AboutVision = () => {
  return (
    <div className=" md:px-24 py-16 px-8 bg-[#F8FBFE]">
      <div className=" w-full flex flex-col md:flex-row gap-12">
        <div className=" md:w-1/2 w-full">
          <h1 className=" vigaRegular md:text-5xl text-3xl text-[#2C2A77] pb-5">
            How our Vision Became Reality{" "}
          </h1>
          <div>
            <Image
              src={
                "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt=""
              width={500}
              height={500}
              className=" rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className=" md:w-1/2 w-full space-y-6">
          <h1 className=" vigaRegular md:text-2xl text-xl text-[#2C2A77] text-justify">
            Our company specializes in software outsourcing and provides robust,
            scalable, and efficient solutions to clients around the world.
          </h1>
          <h1 className=" font-exotwo font-medium text-xl text-slate-900">
            Delivering Diverse Projects Across Industries for Numerous Companies{" "}
          </h1>
          <p className=" text-lg font-exotwo text-slate-800 text-justify">
            Wevloper excels in constructing professional, visually appealing
            websites that meet specific business objectives. Our expertise spans
            e-commerce solutions, custom web applications, and responsive
            designs optimized for superior user experience across all devices.
            We also offer SEO and digital marketing services to boost website
            visibility and traffic. Ensuring maintenance, support, and security
            updates, our mission is to empower businesses in the digital realm
            by enhancing user experience, providing performance data, and
            strengthening brand identity through strategic design.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
