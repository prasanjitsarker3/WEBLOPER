"use client";
import { useState, useCallback } from "react";
import CountUp from "react-countup";
import { Parallax } from "react-parallax";
import ScrollTrigger from "react-scroll-trigger";

const ParallaxData: React.FC = () => {
  const [count, setCount] = useState(false);
  const [visible, setVisible] = useState(false);

  const onEnterViewport = useCallback(() => {
    setVisible(true);
  }, []);

  const onExitViewport = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div className=" py-24 md:px-24">
      <Parallax
        blur={10}
        bgImage="https://images.unsplash.com/photo-1636955669242-11b90050e9ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="grid md:grid-cols-4 gap-12  md:px-12 py-12 bg-black bg-opacity-50">
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && <CountUp start={0} end={2} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Years of Experience
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && <CountUp start={0} end={3} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              International Clients
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && <CountUp start={0} end={6} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Clients in Bangladesh
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && <CountUp start={0} end={12} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Completed Projects
            </h1>
          </div>
        </div>
      </Parallax>
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <div className={`container ${visible ? "container-animate" : ""}`} />
      </ScrollTrigger>
    </div>
  );
};

export default ParallaxData;
