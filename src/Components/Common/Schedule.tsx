import Image from "next/image";
import React from "react";
import timeBanner from "../../../public/image/purple-calendar-clock-icon-3d-reminder-notification-concept-website-ui-purple-background-3d-rendering-illustration.png";
import { Phone } from "lucide-react";

const Schedule = () => {
  return (
    <div className=" md:px-24 px-8 py-12">
      <div className=" w-full flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 w-full mx-auto space-y-3">
          <h1 className=" md:text-5xl text-2xl vigaRegular text-[#2C2A77]">
            Core Technologies
          </h1>
          <h1 className=" md:text-3xl text-2xl vigaRegular text-[#2C2A77]">
            Software Development and Infrastructure
          </h1>
          <h1 className=" text-xl font-exotwo font-medium text-slate-800 text-justify">
            At wevloper, we specialize in developing tailored software
            applications and robust infrastructure to support diverse business
            needs in an effective and efficient manner, ensuring seamless
            integration, scalable solutions, sustained business growth,
            exceptional client satisfaction, and continuous technological
            innovation to stay ahead in a rapidly evolving market.
          </h1>
          <button className=" px-5 py-2 flex items-center gap-3 text-white bg-[#2C2A77] rounded-md">
            Schedule a call <Phone size={15} />
          </button>
        </div>
        <div className="md:w-1/2 w-full mx-auto">
          <Image src={timeBanner} alt="" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;
