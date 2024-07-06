import Schedule from "@/Components/Common/Schedule";
import ContactForm from "@/Components/FrontPage/Technology/ContactForm";
import Technology from "@/Components/FrontPage/Technology/Technology";
import TechnologyAbout from "@/Components/FrontPage/Technology/TechnologyAbout";
import TechnologyBanner from "@/Components/FrontPage/Technology/TechnologyBanner";
import TechnologyMethod from "@/Components/FrontPage/Technology/TechnologyMethod";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Technology",
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
