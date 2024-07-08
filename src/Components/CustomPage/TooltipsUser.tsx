/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import React from "react";
import { AnimatedTooltip } from "../UI/tooltipsUser";
import kholil from "../../../image/User/khollil-profile.png";
import imran from "../../../image/User/imran.png";
import dipok from "../../../image/User/dipak.png";
import monir from "../../../image/User/monir.png";
import sarker from "../../../image/User/prasanjit.png";

const people = [
  {
    id: 1,
    name: "Ibrahim Khollil ",
    designation: "MD",
    image: "/image/Team/IbrahimKhollil.png",
  },
  {
    id: 2,
    name: "Monirul Islam ",
    designation: "CEO",
    image: "/image/Team/MonirulIslam.png",
  },
  {
    id: 3,
    name: "Prasanjit Sarker",
    designation: "CTO",
    image: "/image/Team/PrasanjitSarker.png",
  },
  {
    id: 4,
    name: "Dipak Roy ",
    designation: "UI/UX",
    image: "/image/Team/DipokRoy.png",
  },
  {
    id: 5,
    name: "Imran Ahamed",
    designation: "Python Developer",
    image: "/image/Team/ImranAhamed.png",
  },
  {
    id: 6,
    name: "Rizvi Khalid",
    designation: "MERN Stack",
    image: "/image/Team/RizviKhalid.png",
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
