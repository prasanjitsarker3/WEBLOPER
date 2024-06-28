"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import Image from "next/image";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    img?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto overflow-hidden scroll-hide  flex flex-col md:flex-row justify-center relative  rounded-md w-full"
      ref={ref}
    >
      <div
        className={cn(
          "  rounded-md  sticky top-10  overflow-hidden  md:w-1/2 ",
          contentClassName
        )}
      >
        <div className=" space-y-3">
          <h1 className=" text-lg viga-regular space-x-5">CASE STUDIES </h1>
          <h1 className=" text-3xl font-bold ">We do are digital</h1>
          <h1 className=" text-3xl font-bold ">transformation</h1>
          <h1 className=" text-3xl font-bold ">We envision</h1>
          <h1 className=" text-3xl font-bold ">building a new</h1>
          <h1 className=" text-3xl font-bold ">future by</h1>
          <h1 className=" text-3xl font-bold ">harnessing the</h1>
          <h1 className=" text-3xl font-bold ">potential of technology</h1>
        </div>
      </div>
      <div className="div relative pt-10  scroll-hide flex items-start px-4 md:w-1/2  ">
        <div className="">
          {content.map((item, index) => (
            <div key={item.title + index} className=" relative pb-10  group">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.9,
                }}
                className="overflow-hidden rounded-lg relative"
              >
                {item.img && (
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    className=" rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                )}
                <motion.h2
                  initial={{
                    opacity: 2,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="text-3xl font-bold text-black pb-3 -mt-12 text-center z-50"
                >
                  {item.title}
                </motion.h2>
              </motion.div>
            </div>
          ))}
          <div className="h-40 scrollbar-hide" />
        </div>
      </div>
    </motion.div>
  );
};
