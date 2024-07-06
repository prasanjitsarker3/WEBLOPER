import Schedule from "@/Components/Common/Schedule";
import DigitalBanner from "@/Components/FrontPage/Digitals/Banner";
import DigitalCard from "@/Components/FrontPage/Digitals/DigitalCard";
import DigitalContractForm from "@/Components/FrontPage/Digitals/DigitalContractForm";
import DigitalMarketingServices from "@/Components/FrontPage/Digitals/DigitalMarketingServices";
import DigitalTools from "@/Components/FrontPage/Digitals/DigitalTools";
import ContactForm from "@/Components/FrontPage/Technology/ContactForm";
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
      <DigitalMarketingServices />
      <DigitalTools />
      <div className=" bg-[#F8FBFE]">
        <Schedule />
        <DigitalContractForm />
      </div>
    </div>
  );
};

export default DigitalServicePage;
