"use client";
import React from "react";
import Image from "next/image";
import { StickyScroll } from "@/Components/UI/sticky-scroll-reveal";

const content = [
  {
    title: "Collaborative Editing",
    img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real time changes",
    img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Version control",
    img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Running out of content",
    img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeAbout = () => {
  return (
    <div className="md:px-24">
      <StickyScroll content={content} />
    </div>
  );
};

export default HomeAbout;
