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
    image: kholil,
  },
  {
    id: 2,
    name: "Monirul Islam ",
    designation: "CEO",
    image: monir,
  },
  {
    id: 3,
    name: "Prasanjit Sarker",
    designation: "CTO",
    image: sarker,
  },
  {
    id: 4,
    name: "Sojib ",
    designation: "Team Lead",
    image: imran,
  },
  {
    id: 5,
    name: "Imran Ahamed",
    designation: "Python Developer",
    image: imran,
  },
  {
    id: 6,
    name: "Dipak Roy",
    designation: "UI/UX Designer",
    image: dipok,
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
