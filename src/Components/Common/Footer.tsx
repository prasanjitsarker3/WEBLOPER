"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaDribbble } from "react-icons/fa";
import useFormattedDate from "./useFormattedDate";

const Footer = () => {
  const [temperature, setTemperature] = useState("");
  const date = new Date();
  const formattedDate = useFormattedDate(date);

  useEffect(() => {
    const fetchTemperature = () => {
      const simulatedTemperature = (Math.random() * 10 + 25).toFixed(1);
      setTemperature(simulatedTemperature);
    };

    fetchTemperature();
  }, []);

  return (
    <div className="w-full bg-gray-800">
      <div className=" flex flex-col md:flex-row justify-between items-center gap-12 mx-auto md:px-24 py-16">
        <div className="text-white flex items-center gap-3">
          <Image
            src="https://cdn-icons-png.flaticon.com/128/12339/12339443.png"
            alt="Bangladesh Flag"
            width={30}
            height={30}
          />
          <h1>Dhaka, Bangladesh</h1>
          <h1>{formattedDate}</h1>
          <h1>{temperature !== null ? `${temperature}°C` : "Loading..."}</h1>
        </div>
        <div className="flex justify-center items-center space-x-4 text-white">
          <a
            href="https://www.facebook.com/wevloper"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className=" cursor-pointer" />
          </a>

          <a
            href="https://www.linkedin.com/company/wevloper/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} className=" cursor-pointer" />
          </a>
          <FaDribbble className=" cursor-pointer" />
        </div>
        <div className=" flex items-center gap-3 text-white">
          <h1>2024 © Wevloper. All rights reserved.</h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
