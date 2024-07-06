"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Home, Instagram, Menu, Phone, Route, X } from "lucide-react";
import logo from "../../../public/image/Banner/WEVLOPER-NEW-LOGO-FULL-LENGTH.png";
import Image from "next/image";
import { log } from "console";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Use effect to add or remove 'no-scroll' class on the body
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup effect when component unmounts
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolling ? "bg-white fixed w-full z-40" : "fixed w-full z-40"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center ">
            <Link href="/" className=" relative brightness-125">
              <Image
                src={logo}
                alt=""
                height={500}
                width={500}
                className=" md:h-16 h-12 w-full"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className={`${
                scrolling
                  ? "text-[#009975] brightness-125 font-bold z-50 focus:outline-none"
                  : "text-[#009975] brightness-125 font-bold z-50 focus:outline-none"
              }`}
            >
              {isOpen ? (
                <X
                  className="h-6 w-6 font-bold text-white"
                  aria-hidden="true"
                />
              ) : (
                <Menu className="h-6 w-6 font-bold" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : "-100%" }}
        transition={{ duration: 2 }}
        className="fixed top-0 left-0 w-full h-full bg-[#009975] flex flex-col items-center justify-center z-30"
      >
        <div className="w-full flex flex-col md:flex-row md:justify-evenly  justify-center">
          <div className="space-y-2 flex flex-col mx-auto">
            <Link
              className="flex items-center gap-3"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <Home size={20} className="text-white" />
              <h1 className="text-white uppercase font-exotwo text-lg hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Home
              </h1>
            </Link>

            <Link
              className="flex items-center gap-3"
              href="/technology"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white uppercase font-exotwo text-lg hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Technology
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/digital"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white hover:text-gray-300 font-exotwo text-lg uppercase py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Digital
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/studio"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white hover:text-gray-300 font-exotwo text-lg uppercase py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Studio
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white uppercase font-exotwo text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                About Us
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white uppercase font-exotwo text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Contact
              </h1>
            </Link>
          </div>
          <div className="border-2 border-white block md:hidden mx-8"></div>
          <div className=" flex gap-12 mx-auto md:pt-0 pt-3">
            <div className="border-2 border-white hidden md:block"></div>
            <div className="space-y-3">
              <div>
                <h1 className="vigaRegular text-[#2C2A77] text-2xl">Office</h1>
                <p className="text-white text-lg">
                  Plot 6, Road 4/1, Block-B, Section-12
                </p>
                <p className="text-white text-lg">
                  Mirpur (Pallabi), Dhaka-1216
                </p>
              </div>
              <div>
                <h1 className="vigaRegular text-[#2C2A77] text-2xl">Contact</h1>
                <p className="text-white text-lg">+8801308900149</p>
                <p className="text-white text-lg">info@wevloper.com</p>
              </div>
              <div>
                <h1 className="vigaRegular text-[#2C2A77] text-2xl">
                  Follow Us
                </h1>
                <div className="flex items-center gap-3">
                  <div className="border border-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                    <X className="text-white" size={20} />
                  </div>
                  <div className="border border-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                    <Facebook className="text-white" size={20} />
                  </div>
                  <div className="border border-white h-10 w-10 flex items-center justify-center rounded-full cursor-pointer">
                    <Instagram className="text-white" size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
