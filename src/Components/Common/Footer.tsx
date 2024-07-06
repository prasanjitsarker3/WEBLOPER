"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../../public/image/Banner/WEVLOPER-NEW-LOGO-FULL-LENGTH.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaDribbble,
  FaMedium,
  FaPinterest,
} from "react-icons/fa";
import Link from "next/link";
import { Locate, Mail, Phone } from "lucide-react";
// import { SiClutch, SiLucidchart } from "react-icons/si";

const Footer = () => {
  const [temperature, setTemperature] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const fetchTemperature = () => {
      const simulatedTemperature = (Math.random() * 10 + 25).toFixed(1);
      setTemperature(simulatedTemperature);
    };

    fetchTemperature();
  }, []);

  const formatTime = (date: any) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes} ${ampm}`;
  };

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
          <h1>{formatTime(date)}</h1>
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
