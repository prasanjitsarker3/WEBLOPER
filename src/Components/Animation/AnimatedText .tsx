"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface AnimatedTextProps {
  children: React.ReactNode;
  primaryColor: string;
  secondaryColor: string;
}

export const AnimatedText = ({
  children,
  primaryColor,
  secondaryColor,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        color: secondaryColor,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView, secondaryColor]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0.5, y: 20, color: primaryColor }}
      animate={controls}
      transition={{ duration: 2 }}
      className="md:text-4xl text-3xl font-rubik font-normal"
      whileInView={{ color: secondaryColor, transition: { duration: 2 } }}
    >
      {children}
    </motion.h1>
  );
};

export const AnimatedButton = ({
  children,
  href,
  bg,
}: {
  children: any;
  href: any;
  bg: string;
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 2 }}
    >
      <Link href={href}>
        <button
          // style={{ backgroundColor: bg }}
          className={`px-4 py-2 backdrop-blur-sm border bg-[${bg}] text-white mx-auto text-center rounded-full relative mt-4`}
        >
          <span>{children}</span>
          <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </Link>
    </motion.div>
  );
};

export const AnimatedTextCus = ({
  children,
  primaryColor,
  secondaryColor,
}: AnimatedTextProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        color: secondaryColor,
        transition: { duration: 2 },
      });
    }
  }, [controls, inView, secondaryColor]);

  return (
    <motion.h1
      ref={ref}
      initial={{ opacity: 0.5, y: 20, color: primaryColor }}
      animate={controls}
      transition={{ duration: 2 }}
      className="md:text-4xl text-3xl font-rubik font-normal"
      whileInView={{ color: secondaryColor }}
    >
      {children}
    </motion.h1>
  );
};
