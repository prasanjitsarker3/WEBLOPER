"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Facebook, Home, Instagram, Menu, Phone, Route, X } from "lucide-react";

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
            <Link href="/">
              <h1
                className={`${
                  scrolling
                    ? "text-2xl font-bold text-black"
                    : "text-2xl font-bold text-white"
                }`}
              >
                Logo
              </h1>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className={`${
                scrolling
                  ? "text-black z-50 focus:outline-none"
                  : "text-white z-50 focus:outline-none"
              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : "-100%" }}
        transition={{ duration: 2 }}
        className="fixed top-0 left-0 w-full h-full bg-gradient-to-r from-[#8763F7] via-[#AB54F2] to-[#C250D2] flex flex-col items-center justify-center z-30"
      >
        <div className="w-full flex justify-evenly">
          <div className="space-y-4">
            <Link
              className="flex items-center gap-3"
              href="/"
              onClick={() => setIsOpen(false)}
            >
              <Home size={20} className="text-white" />
              <h1 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Home
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/about"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                About
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/service"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white uppercase vigaRegular text-xl hover:text-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Services
              </h1>
            </Link>
            <Link
              className="flex items-center gap-3"
              href="/contact"
              onClick={() => setIsOpen(false)}
            >
              <Route size={20} className="text-white" />
              <h1 className="text-white hover:text-gray-300 vigaRegular text-xl uppercase py-2 focus:outline-none focus:ring-2 focus:ring-white">
                Contact
              </h1>
            </Link>
            <span
              onClick={() => setIsOpen(false)}
              className="text-white flex items-center gap-3 py-2"
            >
              <Phone size={20} className="text-white" />
              <p className="vigaRegular text-xl"> 09837483</p>
            </span>
          </div>
          <div className=" flex gap-12">
            <div className="border-2 border-white"></div>
            <div className="space-y-3">
              <div>
                <h1 className="vigaRegular text-yellow-500 text-2xl">Office</h1>
                <p className="text-white text-lg">
                  Plot 6, Road 4/1, Block-B, Section-12
                </p>
                <p className="text-white text-lg">
                  Mirpur (Pallabi), Dhaka-1216
                </p>
              </div>
              <div>
                <h1 className="vigaRegular text-yellow-500 text-2xl">
                  Contact
                </h1>
                <p className="text-white text-lg">+8801868849354</p>
                <p className="text-white text-lg">kholil123@#gmail.com</p>
              </div>
              <div>
                <h1 className="vigaRegular text-yellow-500 text-2xl">
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
