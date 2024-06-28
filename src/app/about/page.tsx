import AboutBanner from "@/Components/FrontPage/AboutPage/AboutBanner";
import AboutExpertises from "@/Components/FrontPage/AboutPage/AboutExpertises";
import AboutVision from "@/Components/FrontPage/AboutPage/AboutVision";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "WEV|ABOUT",
  description: "We provide technology service",
};

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutVision />
      <AboutExpertises />
    </div>
  );
};

export default AboutPage;
