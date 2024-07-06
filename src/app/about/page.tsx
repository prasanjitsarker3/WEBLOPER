import AboutBanner from "@/Components/FrontPage/AboutPage/AboutBanner";
import AboutExpertises from "@/Components/FrontPage/AboutPage/AboutExpertises";
import AboutVision from "@/Components/FrontPage/AboutPage/AboutVision";
import CompanyData from "@/Components/FrontPage/Home/CompanyData";
import ContactForm from "@/Components/FrontPage/Technology/ContactForm";
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
      <div className=" bg-[#F8FBFE]">
        <CompanyData />
        <ContactForm />
      </div>
    </div>
  );
};

export default AboutPage;
