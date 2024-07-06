import Schedule from "@/components/Common/Schedule";
import DigitalBanner from "@/components/FrontPage/Digitals/Banner";
import DigitalCard from "@/components/FrontPage/Digitals/DigitalCard";
import DigitalContractForm from "@/components/FrontPage/Digitals/DigitalContractForm";
import DigitalMarketingServices from "@/components/FrontPage/Digitals/DigitalMarketingServices";
import DigitalTools from "@/components/FrontPage/Digitals/DigitalTools";
import ContactForm from "@/components/FrontPage/Technology/ContactForm";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "digital",
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
