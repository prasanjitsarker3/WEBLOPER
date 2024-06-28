"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner2 from "../../../../public/image/download (2).gif";
import bannerImage from "../../../../public/image/we-craft-digital-products.png";
import Image from "next/image";

const StudioBanner = () => {
  return (
    <div className="relative h-screen w-full">
      <div>
        <div className="absolute inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-700">
          <Image
            src={banner2}
            alt={"Studio"}
            layout="fill"
            objectFit="cover"
            priority
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          />
          <div className="text-black flex items-center justify-center absolute inset-0 bg-black bg-opacity-60">
            <div className="space-y-5 md:px-24 px-8">
              <div className=" ">
                <Image
                  src={bannerImage}
                  alt={"Studio"}
                  height={500}
                  width={300}
                />
              </div>
              <div className=" flex  gap-12 brightness-125">
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 hover:bg-emerald-700 transition-colors duration-500 text-white mx-auto text-center rounded-full relative">
                  <span>Start a Project →</span>
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
                <button className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20 hover:bg-red-500 transition-colors duration-500 text-white mx-auto text-center rounded-full relative">
                  <span>Play Showreel →</span>
                  <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r mx-auto from-transparent via-red-500 to-transparent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudioBanner;
