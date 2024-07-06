/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import { AnimatedTooltip } from "../UI/tooltipsUser";
import kholil from "../../../public/image/User/khollil-profile.png";
import imran from "../../../public/image/User/imran.png";
import dipok from "../../../public/image/User/dipak.png";
import monir from "../../../public/image/User/monir.png";
import sarker from "../../../public/image/User/prasanjit.png";

const people = [
  {
    id: 1,
    name: "Ibrahim Khollil ",
    designation: "MD",
    image: "/image/User/khollil-profile.png",
  },
  {
    id: 2,
    name: "Monirul Islam ",
    designation: "CEO",
    image: "/image/User/monir.png",
  },
  {
    id: 3,
    name: "Prasanjit Sarker",
    designation: "CTO",
    image: "/image/User/prasanjit.png",
  },
  {
    id: 4,
    name: "Sojib ",
    designation: "Team Lead",
    image: "/image/User/imran.png",
  },
  {
    id: 5,
    name: "Imran Ahamed",
    designation: "Python Developer",
    image: "/image/User/imran.png",
  },
  {
    id: 6,
    name: "Dipak Roy",
    designation: "UI/UX Designer",
    image: "/image/User/dipak.png",
  },
];

const TooltipsUser = () => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center w-full">
        <AnimatedTooltip items={people} />
      </div>
    </div>
  );
};

export default TooltipsUser;
