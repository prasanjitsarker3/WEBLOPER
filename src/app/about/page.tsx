import AboutBanner from "@/components/FrontPage/AboutPage/AboutBanner";
import AboutExpertises from "@/components/FrontPage/AboutPage/AboutExpertises";
import AboutVision from "@/components/FrontPage/AboutPage/AboutVision";
import CompanyData from "@/components/FrontPage/Home/CompanyData";
import ContactForm from "@/components/FrontPage/Technology/ContactForm";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "about",
  description: "We provide technology service",
};

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <AboutVision />
      <AboutExpertises />
      <div className=" bg-[#F8FBFE]">
        <CompanyData />
        <ContactForm />
      </div>
    </div>
  );
};

export default AboutPage;
