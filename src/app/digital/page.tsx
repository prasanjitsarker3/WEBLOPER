import DigitalBanner from "@/Components/FrontPage/Digitals/Banner";
import DigitalCard from "@/Components/FrontPage/Digitals/DigitalCard";
import DigitalTimeline from "@/Components/FrontPage/Digitals/DigitalTimeline";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Digital",
  description: "We Provide Digital Service",
};
const DigitalServicePage = () => {
  return (
    <div>
      <DigitalBanner />
      <DigitalCard />
      <DigitalTimeline />
    </div>
  );
};

export default DigitalServicePage;
