"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ContactBanner = () => {
  return (
    <div className="h-screen relative bg-[#F8FBFE] ">
      <div className="  absolute md:px-24 px-8 md:pt-0 pt-24 w-full h-full flex flex-col md:flex-row items-center md:gap-12 gap-5">
        <div className=" md:w-1/2 w-full space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-1 vigaRegular"
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              style={{
                background: "linear-gradient(90deg, #00F260, #0575E6, #00F260)",
                backgroundSize: "200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Empowering Connections,Resolving Challenges
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-lg md:text-2xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Looking for top-tier IT services? Wevloper has got you covered. We
            provide comprehensive solutions with highly skilled professionals to
            help you grow and strengthen your business.
          </motion.p>

          <motion.button
            className="px-4 py-2 backdrop-blur-sm border bg-[#2C2A77] border-emerald-500 text-white mx-auto text-center rounded-full relative mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link href="/technology">
              <span>Discover More →</span>
            </Link>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </motion.button>
        </div>
        <div className=" md:w-1/2 w-full ">
          <div className="flex justify-center items-center relative h-60">
            <Image
              src={"/image/Banner/contact.png"}
              alt={"Main"}
              width={500}
              height={500}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
