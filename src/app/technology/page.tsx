import Schedule from "@/components/Common/Schedule";
import ContactForm from "@/components/FrontPage/Technology/ContactForm";
import Technology from "@/components/FrontPage/Technology/Technology";
import TechnologyAbout from "@/components/FrontPage/Technology/TechnologyAbout";
import TechnologyBanner from "@/components/FrontPage/Technology/TechnologyBanner";
import TechnologyMethod from "@/components/FrontPage/Technology/TechnologyMethod";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "technology",
  description: "We provide technology service",
};

const TechnologyPage = () => {
  return (
    <div>
      <TechnologyBanner />
      <TechnologyAbout />
      <TechnologyMethod />
      <Technology />
      <div className=" bg-[#F8FBFE]">
        <Schedule />
        <ContactForm />
      </div>
    </div>
  );
};

export default TechnologyPage;
